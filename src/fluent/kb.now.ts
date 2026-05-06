import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// ─── KNOWLEDGE BASES ─────────────────────────────────────────────────────────

const kbEmergency = Record({
  $id: Now.ID['kb_base_emergency'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge_base',
  data: {
    title:       'Emergency Response Protocols',
    description: 'Step-by-step guidance for surviving and navigating an active emergency. What to do, when, and how.',
    active:      true,
    // owner/application required by SDK DSL; owner defaults to installing user on deploy
    owner: undefined, application: undefined,
  } as any,
})

const kbComms = Record({
  $id: Now.ID['kb_base_comms'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge_base',
  data: {
    title:       'Public Communication & Crisis Messaging',
    description: 'How to receive verified alerts, avoid misinformation, and report information to authorities.',
    active:      true,
    owner: undefined, application: undefined,
  } as any,
})

const kbEvacuation = Record({
  $id: Now.ID['kb_base_evacuation'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge_base',
  data: {
    title:       'Evacuation & Civilian Management',
    description: 'Safe evacuation procedures, what to bring, and guidance for travelling with vulnerable people.',
    active:      true,
    owner: undefined, application: undefined,
  } as any,
})

const kbMedical = Record({
  $id: Now.ID['kb_base_medical'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge_base',
  data: {
    title:       'Medical & Quarantine Operations',
    description: 'Recognising symptoms, understanding the triage process, and quarantine zone rules.',
    active:      true,
    owner: undefined, application: undefined,
  } as any,
})

const kbLogistics = Record({
  $id: Now.ID['kb_base_logistics'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge_base',
  data: {
    title:       'Logistics & Supply Chain',
    description: 'Food and water distribution, how to request supplies, and accessing personal medication.',
    active:      true,
    owner: undefined, application: undefined,
  } as any,
})

// ─── ARTICLES — Emergency Response Protocols ─────────────────────────────────

Record({
  $id: Now.ID['kb_art_er_72h'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEmergency.$id}`,
    short_description: 'What to Do in the First 72 Hours',
    workflow_state:    'published',
    active:            true,
    text: `<h3>The First 72 Hours Are Critical</h3>
<p>Your immediate actions after an emergency determine your safety for the days ahead.</p>
<ul>
  <li><strong>Seek shelter immediately.</strong> Move to the nearest open Evacuation Zone. Check this portal for current zone status.</li>
  <li><strong>Stay calm and conserve energy.</strong> Avoid unnecessary physical exertion in heat. Dehydration is a primary risk.</li>
  <li><strong>Drink water every 2 hours</strong> even if you do not feel thirsty. Ration food — adults can survive 3 days without food but not without water.</li>
  <li><strong>Register as a civilian</strong> at any zone entry point or via this portal. Registration connects you to medical triage, supply allocation, and emergency contacts.</li>
  <li><strong>Stay informed through official channels only.</strong> Check this portal for zone status updates every 30 minutes.</li>
  <li><strong>Do not return home</strong> until authorities confirm it is safe. Aftershocks, structural failures, and gas leaks are active risks.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_er_signal'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEmergency.$id}`,
    short_description: 'How to Signal for Rescue',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Signalling for Rescue</h3>
<p>If you are trapped or unable to move, use the universal three-signal rule to attract rescuers.</p>
<ul>
  <li><strong>Three of anything</strong> signals distress: three whistle blasts, three shouts, three torch flashes, three gunshots.</li>
  <li><strong>Make yourself visible from above.</strong> Lay bright-coloured clothing, tarps, or reflective materials on the ground in an open area spelling SOS or a large X.</li>
  <li><strong>Tap on pipes or walls</strong> in a rhythm of three if trapped in a collapsed structure. Rescuers listen for this pattern.</li>
  <li><strong>Conserve your voice.</strong> Shout only when you hear rescuers nearby. Continuous shouting exhausts you and is rarely heard beyond 100m.</li>
  <li><strong>Stay in one place</strong> once you have signalled. Moving makes you harder to find and wastes energy.</li>
  <li><strong>If you have a phone,</strong> text rather than call — texts reach emergency services even with weak signal.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_er_fire'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEmergency.$id}`,
    short_description: 'Fire Safety During a Crisis',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Fire Hazards Are Elevated During Emergencies</h3>
<p>Damaged gas lines, overloaded electrical systems, and open fires near shelters create elevated fire risk.</p>
<ul>
  <li><strong>If you smell gas,</strong> do not use any electrical switches or open flames. Leave the building immediately and move at least 100m upwind. Report to rescue teams.</li>
  <li><strong>Stop, Drop, and Roll</strong> if your clothing catches fire. Do not run — running fans the flames.</li>
  <li><strong>Smoke kills faster than flames.</strong> If there is smoke, stay low (below 60cm) where air is cleaner. Cover your mouth and nose with a damp cloth.</li>
  <li><strong>Feel doors before opening.</strong> Press the back of your hand against the door. If it is hot, do not open it — find another exit.</li>
  <li><strong>Do not use elevators</strong> during a fire or power-unstable situation.</li>
  <li><strong>Evacuation zone shelters have fire extinguishers</strong> at marked stations. Do not move them from their positions.</li>
</ul>`,
  },
})

// ─── ARTICLES — Public Communication & Crisis Messaging ──────────────────────

Record({
  $id: Now.ID['kb_art_cm_channels'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbComms.$id}`,
    short_description: 'Official Alert Channels — What to Trust',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Only Trust Verified Sources</h3>
<p>During a crisis, misinformation spreads faster than the emergency itself. Use only these verified channels.</p>
<ul>
  <li><strong>This portal (ApocalypseNow):</strong> Real-time zone status, capacity, and public notices. Updates every 15 seconds from authorised operators.</li>
  <li><strong>Emergency broadcast radio:</strong> AM 720 KDWN and AM 840 KXNT are designated emergency broadcast stations for Las Vegas. Keep a battery-powered radio if possible.</li>
  <li><strong>Wireless Emergency Alerts (WEA):</strong> Authoritative alerts sent directly to mobile phones in affected areas. These cannot be faked by non-government senders.</li>
  <li><strong>Zone Commanders at entry points</strong> carry authorised briefing sheets. They are identifiable by orange vests with ZONE COMMANDER badges.</li>
  <li><strong>Social media is not verified.</strong> Do not act on information from social platforms without confirming it against the above sources.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_cm_rumour'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbComms.$id}`,
    short_description: 'Rumour Control — Identifying Misinformation',
    workflow_state:    'published',
    active:            true,
    text: `<h3>How to Identify False Information</h3>
<p>False rumours during emergencies cause panic, blocked routes, and unnecessary risk. Protect yourself and others.</p>
<ul>
  <li><strong>Verify the source first.</strong> Ask: "Where did this come from?" If the answer is "someone told me" or a social media post, do not act on it.</li>
  <li><strong>Check this portal.</strong> If a zone is rumoured to be closing or at risk, the portal will show it. If the portal does not show it, do not assume it is true.</li>
  <li><strong>Beware of urgency.</strong> Misinformation often uses extreme urgency ("everyone must leave NOW") to bypass rational thinking. Pause and verify before acting.</li>
  <li><strong>Do not share unverified information</strong> even if it seems helpful. One false rumour can block an evacuation route and cost lives.</li>
  <li><strong>Report misinformation</strong> to any Zone Commander or at a Registration Desk. Authorities track and counter false narratives actively.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_cm_report'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbComms.$id}`,
    short_description: 'How to Report Information to Authorities',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Your Information Can Save Lives</h3>
<p>If you have information about trapped civilians, hazards, or critical conditions, report it through official channels.</p>
<ul>
  <li><strong>Use this portal:</strong> Submit a rescue request or civilian registration. Operators monitor submissions continuously.</li>
  <li><strong>Find a Zone Commander</strong> at any evacuation zone entry point. They have direct radio contact with field rescue teams.</li>
  <li><strong>Call 911 for life-threatening emergencies.</strong> Lines may be overloaded — stay on hold. Do not hang up and redial repeatedly as this worsens congestion.</li>
  <li><strong>Text 911</strong> if voice calls are not connecting. Type location first, then the nature of the emergency.</li>
  <li><strong>Be specific:</strong> Give a cross-street or landmark, number of people involved, and the nature of the hazard. Vague reports delay response.</li>
  <li><strong>Stay on scene</strong> if safe to do so after reporting — rescue teams will have follow-up questions.</li>
</ul>`,
  },
})

// ─── ARTICLES — Evacuation & Civilian Management ─────────────────────────────

Record({
  $id: Now.ID['kb_art_ev_how'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEvacuation.$id}`,
    short_description: 'How to Evacuate Safely',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Evacuating Without Creating Additional Risk</h3>
<p>A disorganised evacuation causes as many casualties as the emergency itself. Follow these steps.</p>
<ul>
  <li><strong>Move immediately when told to evacuate.</strong> Do not wait to gather belongings beyond a 60-second emergency kit (documents, medication, water, phone charger).</li>
  <li><strong>Use designated routes.</strong> Do not use highways unless instructed — they gridlock quickly. Pedestrian corridors are faster during urban emergencies.</li>
  <li><strong>Check this portal for zone status</strong> before choosing a destination. Do not head to an At Risk or Evacuated zone.</li>
  <li><strong>Walk, do not run,</strong> unless there is immediate physical danger. Running causes falls, panic, and crowd crushes.</li>
  <li><strong>Help others who cannot move independently</strong> but do not delay your own evacuation to the point of personal danger. Notify a Zone Commander of people who need assistance.</li>
  <li><strong>Do not use vehicles inside evacuation corridors</strong> unless you have elderly or injured passengers. Vehicles block pedestrian flow.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_ev_pack'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEvacuation.$id}`,
    short_description: 'What to Bring to an Evacuation Zone',
    workflow_state:    'published',
    active:            true,
    text: `<h3>The 60-Second Emergency Pack</h3>
<p>You have 60 seconds. Pack only what you can carry easily. Zones provide water, food, first aid, and shelter.</p>
<ul>
  <li><strong>ID and documents:</strong> Government-issued ID, insurance card, any legal documents (passport, medical records if accessible).</li>
  <li><strong>Medications:</strong> At minimum a 3-day supply of any critical medication (insulin, heart medication, inhalers, EpiPen).</li>
  <li><strong>Phone and charger.</strong> Your phone is your link to official information and emergency contacts.</li>
  <li><strong>Water:</strong> One litre per person if possible — zones have supplies but demand is unpredictable in the first hours.</li>
  <li><strong>Warm layer</strong> — emergency shelters are air-conditioned or may be outdoors overnight. Temperatures drop significantly.</li>
  <li><strong>Do NOT bring:</strong> Large luggage, pets (unless you have a carrier), firearms, or large amounts of cash. These create security and logistics problems in zone environments.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_ev_vulnerable'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbEvacuation.$id}`,
    short_description: 'Travelling with Children, Elderly & Pets',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Supporting Vulnerable People During Evacuation</h3>
<p>Children, elderly individuals, and pets require specific preparation. Plan before you move.</p>
<ul>
  <li><strong>Children under 12:</strong> Write your name, phone number, and destination zone on a card and attach it to their clothing. Do not rely on children to remember this information under stress.</li>
  <li><strong>Elderly with mobility limitations:</strong> Notify the nearest Zone Commander immediately. Priority assisted transport runs every 30 minutes from zone entry points. Do not attempt to carry an elderly person unassisted over long distances.</li>
  <li><strong>People with medical devices</strong> (oxygen, dialysis, powered wheelchairs): Register as high-priority civilian immediately at this portal or at zone entry. Medical priority lanes exist at all zones.</li>
  <li><strong>Pets:</strong> Evacuation zones accept small pets in carriers only. Large animals cannot be accommodated. Contact the Henderson Animal Care facility for large animal assistance: zone coordinators have the current number.</li>
  <li><strong>Never leave children or dependent elderly unattended</strong> at any point in the evacuation process, including at zones.</li>
</ul>`,
  },
})

// ─── ARTICLES — Medical & Quarantine Operations ───────────────────────────────

Record({
  $id: Now.ID['kb_art_med_symptoms'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbMedical.$id}`,
    short_description: 'Recognising Symptoms Requiring Isolation',
    workflow_state:    'published',
    active:            true,
    text: `<h3>When to Self-Report for Medical Screening</h3>
<p>Some symptoms require immediate medical evaluation and possible isolation to protect others. Do not wait.</p>
<ul>
  <li><strong>Report immediately if you have:</strong> Fever above 38.5°C (101.3°F), persistent cough with blood, severe difficulty breathing, sudden confusion or disorientation, rash appearing rapidly on multiple body parts.</li>
  <li><strong>Report if you were near Zone C (Henderson)</strong> in the 72 hours before closure, even if you feel well. Exposure does not always produce immediate symptoms.</li>
  <li><strong>Do not enter the main zone</strong> if you have these symptoms. Alert the registration staff at the zone entry point before entering. There is a dedicated medical intake lane.</li>
  <li><strong>Self-isolating before evaluation</strong> is not optional — it is legally required under active emergency health orders. Zone medical staff will guide you through the process.</li>
  <li><strong>Mild symptoms</strong> (headache, fatigue, mild sore throat) do not require isolation but should be reported at registration for monitoring.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_med_triage'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbMedical.$id}`,
    short_description: 'What Happens at Medical Triage',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Understanding the Triage Process</h3>
<p>Triage is how medical teams determine who needs care first. It is not a value judgement — it saves the most lives.</p>
<ul>
  <li><strong>Step 1 — Screening:</strong> At zone entry you describe your symptoms. An AI-assisted system makes an initial classification (Cleared, Medical Attention, or Quarantine). A human operator confirms or overrides all classifications.</li>
  <li><strong>Cleared:</strong> No immediate medical risk. You proceed to the main shelter area and receive a wristband. Register any chronic conditions at the medical station inside.</li>
  <li><strong>Medical Attention:</strong> You are directed to the medical tent for evaluation by a paramedic. This typically takes 15–30 minutes. You are not isolated — other patients are present.</li>
  <li><strong>Quarantine:</strong> You are directed to an isolated holding area for evaluation by a physician. You may not leave the area until cleared. Family members may not accompany you but will be notified of your location.</li>
  <li><strong>Manual Review:</strong> If the AI system is unavailable, an operator classifies you manually. There may be a short wait. Do not leave the assessment area.</li>
  <li><strong>You can request a human review</strong> of any AI classification at any point. This is your right.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_med_quarantine'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbMedical.$id}`,
    short_description: 'Quarantine Zone Rules',
    workflow_state:    'published',
    active:            true,
    text: `<h3>If You Are Placed in Quarantine</h3>
<p>Quarantine protects other civilians, not just you. Your cooperation directly saves lives.</p>
<ul>
  <li><strong>You may not leave the quarantine area</strong> without medical clearance. Security staff are present. Attempting to leave will result in mandatory detention and delayed clearance.</li>
  <li><strong>You will receive:</strong> A private or semi-private space (minimum 2m²), water, food, a blanket, and access to a phone to contact family.</li>
  <li><strong>A physician will evaluate you</strong> within 4 hours of placement. If this does not happen, flag it to any staff member — this is a breach of protocol.</li>
  <li><strong>Your contacts will be notified</strong> of your general location and status. Specific medical information is confidential.</li>
  <li><strong>Duration:</strong> Minimum 24 hours observation. If tests are negative and symptoms resolve, you will be moved to Cleared status and transferred to the main shelter.</li>
  <li><strong>Medications:</strong> Bring all personal medications into quarantine. Staff will verify and document them. You will not be separated from necessary medications.</li>
</ul>`,
  },
})

// ─── ARTICLES — Logistics & Supply Chain ─────────────────────────────────────

Record({
  $id: Now.ID['kb_art_log_water'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbLogistics.$id}`,
    short_description: 'Water and Food Distribution Points',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Where and When to Collect Water and Food</h3>
<p>Supply distribution is managed to prevent shortages. Follow the schedule — do not stockpile.</p>
<ul>
  <li><strong>Water:</strong> Available 24 hours at designated water stations inside each zone (look for blue flags). Each registered civilian receives 2 litres per day. Additional water requires a medical note if symptomatic.</li>
  <li><strong>Meals:</strong> Distributed 3× daily — 07:00, 12:00, and 18:00 — at the main distribution tent (look for orange flags). Bring your registration wristband. Meals without wristbands are available on request but are lower priority.</li>
  <li><strong>Infant formula and baby food:</strong> Available at the medical station, not the main distribution tent. Show your registration wristband and state the infant's age.</li>
  <li><strong>Dietary restrictions (halal, kosher, vegan, allergen-free):</strong> Register your requirements at the logistics desk inside the zone. 24-hour lead time required.</li>
  <li><strong>Do not take more than your daily allocation.</strong> Supply chains are under strain. Hoarding food or water is a violation of zone rules and will result in review of your registration.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_log_supplies'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbLogistics.$id}`,
    short_description: 'How to Request Supplies or Equipment',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Requesting Supplies Beyond Basic Allocation</h3>
<p>Standard supplies cover basic needs. Additional items require a formal request.</p>
<ul>
  <li><strong>Go to the Logistics Desk</strong> inside your zone (look for the yellow sign marked LOGISTICS). Desks are staffed 06:00–22:00.</li>
  <li><strong>Bring your registration wristband.</strong> Requests without registration cannot be processed.</li>
  <li><strong>Common requestable items:</strong> Additional blankets, hygiene kits, clothing (sizes available vary), phone chargers, torches, first-aid kits for personal use.</li>
  <li><strong>Medical equipment requests</strong> (wheelchairs, crutches, medical-grade supplies) go through the Medical Station, not the Logistics Desk.</li>
  <li><strong>Processing time:</strong> Non-urgent requests are fulfilled within 4 hours if stock is available. Urgent requests (assessed by staff) are prioritised.</li>
  <li><strong>If an item is out of stock,</strong> you will be added to a waitlist and notified when the next supply delivery arrives. Deliveries occur twice daily: 08:00 and 16:00.</li>
</ul>`,
  },
})

Record({
  $id: Now.ID['kb_art_log_meds'],
  $meta: { installMethod: 'demo' },
  table: 'kb_knowledge',
  data: {
    kb_knowledge_base: `${kbLogistics.$id}`,
    short_description: 'Accessing Personal Medication at Shelter Zones',
    workflow_state:    'published',
    active:            true,
    text: `<h3>Medication Access at Evacuation Zones</h3>
<p>Running out of critical medication during an emergency is a medical emergency in itself. Act early.</p>
<ul>
  <li><strong>Report your medications at registration.</strong> This creates a record and flags you for priority access if supply issues arise.</li>
  <li><strong>If you brought your medication:</strong> Keep it on your person or in your designated space. Do not store medication in shared areas. Lock boxes are available at the medical station on request.</li>
  <li><strong>If you forgot your medication:</strong> Report to the Medical Station immediately. Do not wait until you run out. Staff have emergency formulary access for the most common critical drugs (insulin, blood pressure, cardiac, respiratory, mental health).</li>
  <li><strong>Prescription verification:</strong> If possible, bring the prescription bottle or a photo of your prescription label. If you cannot, a physician on site can verify your medical history and issue an emergency authorisation.</li>
  <li><strong>Controlled substances</strong> (opioids, benzodiazepines, ADHD medication) require physician sign-off before emergency supply. See a doctor at the Medical Station — do not wait.</li>
  <li><strong>Insulin refrigeration:</strong> All medical stations have a refrigerator for insulin. Hand it in when you arrive and collect doses as needed.</li>
</ul>`,
  },
})
