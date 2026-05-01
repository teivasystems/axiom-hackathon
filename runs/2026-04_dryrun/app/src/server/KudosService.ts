/**
 * KudosService — core data and notification logic for x_9274_kudos.
 * Extends AbstractAjaxProcessor to support GlideAjax calls from Portal widgets.
 */
// @ts-nocheck — ServiceNow prototype-based class, not standard TS class syntax
var KudosService = Class.create();

KudosService.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    type: 'KudosService',

    /**
     * Creates a kudos record.
     * @param {string} receiverSysId
     * @param {string} message
     * @param {string} category  one of: teamwork, innovation, leadership, above_beyond, recognition
     * @returns {string} sys_id of new record, or '' on failure
     */
    createKudo: function (receiverSysId, message, category) {
        if (!receiverSysId || !message || !category) {
            gs.warn('KudosService.createKudo: missing required parameter');
            return '';
        }

        var gr = new GlideRecord('x_9274_kudos_entry');
        gr.initialize();
        gr.setValue('u_giver', gs.getUserID());
        gr.setValue('u_receiver', receiverSysId);
        gr.setValue('u_message', message);
        gr.setValue('u_category', category);
        gr.setValue('short_description', message.substring(0, 160));

        var sysId = gr.insert();
        if (!sysId) {
            gs.error('KudosService.createKudo: insert failed for receiver=' + receiverSysId);
            return '';
        }
        return sysId;
    },

    /**
     * Returns kudos from the last N days as a JSON string.
     * @param {number} days  lookback window (default 30)
     * @returns {string}  JSON array — [{giver, receiver, message, category, created_on}]
     */
    getRecentKudos: function (days) {
        var lookback = days || 30;
        var cutoff = new GlideDateTime();
        cutoff.addDaysLocalTime(-lookback);

        var gr = new GlideRecord('x_9274_kudos_entry');
        gr.addQuery('sys_created_on', '>=', cutoff);
        gr.orderByDesc('sys_created_on');
        gr.query();

        var results = [];
        while (gr.next()) {
            results.push({
                giver: gr.getDisplayValue('u_giver'),
                receiver: gr.getDisplayValue('u_receiver'),
                message: gr.getValue('u_message'),
                category: gr.getValue('u_category'),
                created_on: gr.getValue('sys_created_on'),
            });
        }
        return JSON.stringify(results);
    },

    /**
     * Sends an in-platform notification to the kudo receiver.
     * @param {string} receiverSysId
     * @param {string} giverName
     * @param {string} message
     * @param {string} categoryLabel
     * @returns {boolean}
     */
    sendNotification: function (receiverSysId, giverName, message, categoryLabel) {
        try {
            var notif = new GlideRecord('sysevent_email_action');
            // Use gs.eventQueue to fire a platform event instead of direct email
            gs.eventQueue(
                'x_9274_kudos.received',
                new GlideRecord('x_9274_kudos_entry'), // placeholder — event carries parms
                giverName + ' | ' + categoryLabel,
                message.substring(0, 200)
            );
            // Also create an in-platform notification via sys_notification_recipients if available
            var msg = new GlideRecord('sys_user_notification');
            if (msg.isValidTable()) {
                msg.initialize();
                msg.setValue('user', receiverSysId);
                msg.setValue('subject', giverName + ' gave you a Kudos!');
                msg.setValue('message', '[' + categoryLabel + '] ' + message);
                msg.insert();
            }
            return true;
        } catch (e) {
            gs.error('KudosService.sendNotification: ' + e.message);
            return false;
        }
    },

    /**
     * Stores the Claude digest text in the system property x_9274_kudos.latest_digest.
     * @param {string} digestText
     * @returns {boolean}
     */
    storeDigest: function (digestText) {
        try {
            gs.setProperty('x_9274_kudos.latest_digest', digestText || '');
            return true;
        } catch (e) {
            gs.error('KudosService.storeDigest: ' + e.message);
            return false;
        }
    },

    /**
     * Reads the stored Claude digest.
     * @returns {string}
     */
    getDigest: function () {
        return gs.getProperty('x_9274_kudos.latest_digest', '');
    },
});
