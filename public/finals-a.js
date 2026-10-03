/* Additional questions written so there are three unique 100-question finals (part A: Tests 1, 2 and 4). */
(function(){
  const L = 'ABCDEFGH';
  const add = (unit, type, c, prompt, opts, correct, rationale) =>
    (window.EXTRA_ITEMS = window.EXTRA_ITEMS || []).push({ unit, item: { type, c, prompt, options: opts.map((o, i) => [L[i], o]), correct: correct.split(''), rationale } });
  const mc = (unit, ...a) => add(unit, 'mc', ...a);

  /* ---- Test 4: Musculoskeletal ---- */
  mc('t1','Cast care','How should the nurse handle a wet plaster cast?',
    ['With the fingertips, to avoid bumping it','With the palms of the hands, to avoid making dents','Cover it with a blanket to speed drying','Rest it on a hard surface'], 'B',
    'Fingertip pressure can dent a drying plaster cast and create pressure points underneath. The cast is supported on pillows and left uncovered so it dries evenly.');
  mc('t1','Traction care','A 20-month-old is in Bryant traction for a femur fracture. Which position is correct?',
    ['Legs flat on the bed','Hips flexed at 90 degrees with the buttocks slightly off the bed','Child sitting upright','Only the injured leg suspended'], 'B',
    'Bryant traction suspends both legs vertically so that the child’s body weight provides countertraction. The buttocks should be just off the mattress.');
  mc('t1','External fixation & pin care','Which finding at the pin site of an external fixator should the nurse report?',
    ['Small amount of clear drainage on day 1','Thick, yellow-green drainage with redness and odor','Mild tenderness when moving','A dry crust at the pin site'], 'B',
    'Purulent, foul-smelling drainage with spreading redness suggests pin-site infection, which can lead to osteomyelitis. Pin care is done per facility protocol.');
  mc('t1','DDH (Pavlik harness)','Which teaching is correct for parents of an infant in a Pavlik harness?',
    ['Adjust the straps whenever the baby seems uncomfortable','Keep the harness on as prescribed (usually around the clock), check the skin under the straps, and don’t adjust the straps','Remove it at night','Use lotion and powder under the straps'], 'B',
    'The harness holds the hips flexed and abducted so the hip joint can form normally. Only the provider adjusts the straps. Lotions and powders are avoided because they can cause skin breakdown.');
  mc('t1','Fractures in children','Why do children with fractures near the end of a long bone need follow-up?',
    ['Children’s bones never heal fully','An injury to the growth plate can affect future bone growth','Children always need surgery','Casts must be changed daily'], 'B',
    'Growth plate (physeal) injuries can cause limb length differences or angular deformity, so growth is monitored after healing. Children’s bones otherwise heal faster than adults’.');
  mc('t1','Bone tumors','A 14-year-old has had several weeks of knee pain and swelling that wakes him at night and is not related to an injury. What should the nurse suspect?',
    ['Normal growing pains','Possible bone tumor such as osteosarcoma, which needs prompt evaluation','A sprain','Osgood-Schlatter disease'], 'B',
    'Osteosarcoma often occurs near the knee in adolescents during growth spurts. Persistent, worsening pain at night with swelling is a red flag.');
  mc('t1','Scoliosis screening','During a scoliosis screening, the nurse asks the child to bend forward at the waist. What is the nurse looking for?',
    ['Leg length','A rib hump or uneven shoulder blades or hips','Foot alignment','Neck range of motion'], 'B',
    'The Adams forward bend test shows the rotation of the spine as a rib hump on one side. Uneven shoulders, scapulae or waist also suggest scoliosis.');
  mc('t1','Osgood-Schlatter disease','A 13-year-old soccer player has pain and a tender bump just below the kneecap. Which teaching is appropriate?',
    ['Complete bed rest for 2 months','Rest from painful activities, ice, and an NSAID as directed; it usually resolves when growth slows','Surgery is required','Apply heat and keep playing through the pain'], 'B',
    'Osgood-Schlatter disease is an overuse inflammation at the tibial tubercle in active adolescents. It is managed conservatively.');

  /* ---- Test 4: Integumentary ---- */
  mc('t2','Burns: fluid resuscitation','During fluid resuscitation for a child with major burns, which urine output shows the fluids are adequate?',
    ['0.1 mL/kg/hour','About 1 mL/kg/hour','5 mL/kg/hour','Any amount is acceptable'], 'B',
    'Urine output is the best guide to burn fluid replacement. In young children about 1 mL/kg/hour is the target. Less suggests under-resuscitation.');
  mc('t2','Burns: wound care & pain','What should the nurse do before a child’s burn dressing change?',
    ['Give an analgesic early enough that it is working when the dressing change starts','Wait until the child asks for pain medicine','Skip pain medicine because dressing changes are quick','Give the analgesic after the procedure only'], 'A',
    'Burn dressing changes are very painful. Premedicating, along with distraction and child life support, makes the procedure tolerable.');
  mc('t2','Burns: inhalation injury','A child rescued from a house fire has soot around the mouth, singed nasal hairs and a hoarse voice. What is the priority?',
    ['Calculate the burn size','Airway, because swelling from inhalation injury can block it','Clean the face','Start oral fluids'], 'B',
    'These are signs of inhalation injury. Airway swelling can develop quickly, so early airway management is the priority.');
  mc('t2','Burns: electrical injury','Which assessment is most important after a child receives an electrical burn?',
    ['Hair loss','Cardiac monitoring for dysrhythmias','Blood glucose','Vision'], 'B',
    'Electricity travels through the body and can cause cardiac dysrhythmias and deep tissue damage that is much larger than the skin wounds suggest.');
  mc('t2','Scabies','Which teaching is correct for a family treating scabies with permethrin?',
    ['Treat only the child with the rash','Apply the cream from the neck down (including the scalp in infants), leave it on as directed, and treat all household contacts at the same time','Itching will stop immediately','Wash bedding in cold water'], 'B',
    'Everyone in close contact is treated at once to prevent reinfestation. Bedding and clothing are washed in hot water. Itching can last 2–4 weeks after successful treatment.');
  mc('t2','Acne','An adolescent is starting isotretinoin for severe acne. Which teaching is most important?',
    ['It is safe during pregnancy','It can cause severe birth defects, so female patients must avoid pregnancy and follow the required contraception and testing program','Take it with vitamin A supplements','Expect results within 2 days'], 'B',
    'Isotretinoin is highly teratogenic. A monitoring program requires pregnancy tests and two forms of contraception. Lipids and liver function are also monitored.');
  mc('t2','Cellulitis','How can the nurse best monitor whether a child’s cellulitis is spreading?',
    ['Take daily photos only','Outline the border of the redness with a skin marker and note the date and time','Ask the child if it feels better','Measure the temperature only'], 'B',
    'Marking the edges makes spread easy to see. Spreading redness, fever or red streaks suggest the antibiotics aren’t working.');
  mc('t2','Contact dermatitis','A child has just touched poison ivy. What is the best first action?',
    ['Pop any blisters','Wash the skin with soap and water as soon as possible and wash clothing that touched the plant','Apply a heating pad','Cover the area tightly'], 'B',
    'Prompt washing removes the plant oil (urushiol). The fluid in the blisters does not spread the rash.');
  mc('t2','Cold injury (frostbite)','How should frostbitten fingers be treated?',
    ['Rub them vigorously with snow','Rewarm them in warm (not hot) water, about 98.6–102°F (37–39°C), without rubbing','Hold them near a fire','Apply ice packs'], 'B',
    'Rubbing damages frozen tissue, and dry heat can burn numb skin. Rewarming is painful, so analgesia is given.');
  mc('t2','Seborrheic dermatitis','How should parents care for an infant’s cradle cap (seborrheic dermatitis)?',
    ['Pick off the scales with the fingernails','Wash the scalp with a mild shampoo and gently loosen the scales with a soft brush','Avoid washing the scalp','Apply a heavy steroid cream daily for months'], 'B',
    'Cradle cap is harmless and usually clears with gentle washing and brushing. Softening the scales with a little oil before washing can help.');

  /* ---- Test 4: Hematology / Oncology ---- */
  mc('t3','Hemophilia teaching','Which activity is best for a school-age child with hemophilia?',
    ['Football','Swimming','Ice hockey','Wrestling'], 'B',
    'Low-contact activities such as swimming build muscle that protects the joints without high injury risk. Families also avoid aspirin and NSAIDs and keep factor replacement available.');
  mc('t3','Immune thrombocytopenia (ITP)','A child develops petechiae and easy bruising 2 weeks after a viral illness, with a very low platelet count. Which teaching is appropriate?',
    ['Encourage contact sports','Avoid contact sports and NSAIDs or aspirin, and report bleeding such as nosebleeds or blood in urine or stool','Take ibuprofen for pain','Expect no follow-up'], 'B',
    'ITP often follows a viral infection and usually resolves on its own in children. Bleeding precautions are used until platelets recover.');
  mc('t3','Iron supplementation','Which teaching is correct for a child taking liquid iron?',
    ['Give it with milk','Give it between meals with juice high in vitamin C, through a straw or dropper toward the back of the mouth, and expect dark stools','Stop it if stools turn dark','Give it with an antacid'], 'B',
    'Vitamin C improves absorption, while milk and antacids reduce it. Liquid iron can stain teeth. Dark green or black stools are expected.');
  mc('t3','Sickle cell complications','A child with sickle cell disease has new chest pain, fever, cough and an oxygen saturation of 89%. What should the nurse suspect?',
    ['A common cold','Acute chest syndrome, which is an emergency','Anxiety','Muscle strain'], 'B',
    'Acute chest syndrome is a leading cause of death in sickle cell disease. It needs oxygen, antibiotics, pain control, incentive spirometry and often transfusion.');
  mc('t3','Chemotherapy side effects','A child receiving chemotherapy has painful mouth sores (mucositis). Which mouth care is best?',
    ['Alcohol-based mouthwash','A soft toothbrush or sponge swabs, frequent saline or prescribed rinses, and bland, soft foods','Lemon-glycerin swabs','Hard-bristle brushing'], 'B',
    'Gentle cleaning keeps the mouth clean without more injury. Alcohol and lemon-glycerin dry and irritate the tissue.');
  mc('t3','Tumor lysis syndrome','A child with leukemia starting chemotherapy is at risk for tumor lysis syndrome. Which lab changes does the nurse watch for?',
    ['Low potassium and low uric acid','High potassium, high uric acid, high phosphorus and low calcium','High calcium only','Low glucose'], 'B',
    'As cancer cells break down rapidly they release potassium, phosphate and nucleic acids (which become uric acid). Aggressive hydration and medications such as allopurinol help prevent kidney injury.');
  mc('t3','Bleeding precautions','A child’s platelet count is 18,000/mm³. Which order should the nurse question?',
    ['Use a soft toothbrush','Take a rectal temperature','Use an electric razor','Apply pressure to venipuncture sites for 5 minutes'], 'B',
    'Rectal temperatures, enemas and IM injections are avoided with severe thrombocytopenia because they can cause bleeding.');
  mc('t3','Blood transfusion reactions','Fifteen minutes into a blood transfusion, a child develops fever, chills and hives. What should the nurse do first?',
    ['Slow the transfusion','Stop the transfusion and keep the IV line open with normal saline, then notify the provider','Give acetaminophen and continue','Remove the IV'], 'B',
    'Any suspected transfusion reaction means stopping the blood immediately. The tubing is changed and the line kept open with normal saline. The blood bag is returned to the blood bank per policy.');

  /* ---- Test 4: ENT & Eye ---- */
  mc('t4','Otitis externa','A child who swims often has ear pain that gets worse when the outer ear is pulled. Which teaching helps prevent this?',
    ['Use cotton swabs deep in the ear canal','Dry the ears well after swimming, or use drying drops if recommended','Keep water in the ears','Avoid all bathing'], 'B',
    'Otitis externa ("swimmer’s ear") is an infection of the outer ear canal. Pain with pinna movement helps tell it apart from middle ear infection.');
  mc('t4','Hearing loss','Which finding in an 18-month-old suggests possible hearing loss?',
    ['Says about 10 words','Doesn’t respond to their name or to sounds out of sight, and has few or no words','Startles at loud noises','Points to familiar objects when named'], 'B',
    'Delayed speech and not reacting to sounds are key signs. Early hearing evaluation protects language development.');
  mc('t4','Eye injuries','A child splashes a household cleaner into one eye. What is the first action?',
    ['Patch the eye and go to the clinic','Flush the eye immediately with large amounts of clean water for at least 15–20 minutes','Rub the eye','Wait to see whether symptoms develop'], 'B',
    'Immediate, prolonged irrigation limits chemical damage. The child is then evaluated by a provider.');
  mc('t4','Eye injuries','A child has a stick lodged in the eye. What should the nurse do?',
    ['Pull the stick out','Leave the object in place, protect the eye with a shield without pressing on it, and get emergency care','Flush the eye with water','Have the child rub the eye'], 'B',
    'Removing a penetrating object can cause more damage. Stabilizing and shielding the eye prevents further injury until an eye specialist removes it.');
  mc('t4','Periorbital cellulitis','A child has fever with red, swollen eyelids on one side. Which finding is most concerning?',
    ['Mild tearing','Pain with eye movement, bulging eye or decreased vision','A runny nose','Itching'], 'B',
    'These signs suggest the infection has spread behind the eye (orbital cellulitis), which can threaten vision and spread to the brain. IV antibiotics are needed.');
  mc('t4','Retinoblastoma','A parent notices that one of the child’s pupils looks white in flash photos. What is the best response?',
    ['It is just the camera flash','The child needs prompt evaluation by an eye specialist, because a white pupil can be a sign of retinoblastoma','It is normal in toddlers','Use eye drops and recheck in a year'], 'B',
    'A white pupillary reflex (leukocoria) is the most common sign of retinoblastoma, an eye cancer of young children. Early diagnosis saves vision and life.');
  mc('t4','Vision screening','At about what age can children usually start eye-chart vision screening at well visits?',
    ['6 months','About 3–4 years','10 years','Only when the child reports problems'], 'B',
    'Eye charts with pictures or letters can be used once a child can cooperate, usually around age 3–4. Younger children are screened with the red reflex and instrument-based methods.');
  mc('t4','Allergic conjunctivitis','A child has itchy, watery eyes in both eyes every spring. Which treatment fits?',
    ['Antibiotic eye drops','Cool compresses and antihistamine eye drops, and avoid rubbing the eyes','Patching both eyes','Warm compresses with honey'], 'B',
    'Allergic conjunctivitis causes itching and watery discharge in both eyes and isn’t contagious. Antibiotics don’t help.');
  mc('t4','Tonsillectomy discharge teaching','When is a child at highest risk for bleeding after going home from a tonsillectomy?',
    ['Only during the first hour','About 5–10 days after surgery, when the scabs come off','After 1 month','There is no risk after discharge'], 'B',
    'Secondary hemorrhage often happens when the eschar sloughs. Parents should report bright red bleeding or frequent swallowing right away.');
  mc('t4','Nasal foreign body','A toddler has a foul-smelling discharge from one nostril only. What should the nurse suspect?',
    ['A common cold','A foreign object in the nose','Allergies','Sinusitis in both sinuses'], 'B',
    'One-sided, foul nasal discharge in a young child is a classic sign of a foreign body, which is removed by a provider.');
  mc('t4','Button batteries','A parent thinks a toddler pushed a small button battery into the nose. What should the nurse advise?',
    ['Wait for it to come out on its own','Seek emergency care right away, because button batteries can burn tissue within hours','Flush the nose with water at home','Give the child a decongestant'], 'B',
    'Button batteries cause rapid chemical burns in the nose, ear or esophagus. Swallowed batteries are also emergencies.');

  /* ---- Test 1: Genetics & newborn ---- */
  mc('e1s1','Patterns of inheritance','One parent has an autosomal dominant disorder and the other parent does not. What is the chance each child will inherit it?',
    ['0%','25%','50%','100%'], 'C',
    'An autosomal dominant condition needs only one copy of the gene. An affected parent passes the gene in 50% of pregnancies.');
  mc('e1s1','X-linked inheritance','A mother is a carrier of an X-linked recessive disorder, and the father is unaffected. Which statement is correct?',
    ['All children will be affected','Each son has a 50% chance of being affected, and each daughter has a 50% chance of being a carrier','Only daughters can be affected','No child can be affected'], 'B',
    'Sons get their single X from the mother, so they are affected if they inherit her affected X. Daughters get a normal X from the father, so they are usually carriers.');
  mc('e1s1','Placental function','Which statement about the placenta is accurate?',
    ['It blocks all medications from reaching the fetus','Many medications and substances cross the placenta, so pregnant clients should check before taking any drug','It produces no hormones','It provides oxygen only during labor'], 'B',
    'The placenta handles gas exchange, nutrients, waste removal and hormone production (hCG, hPL, estrogen, progesterone), but it is not a complete barrier.');
  mc('e1s1','Umbilical cord','How many vessels does a normal umbilical cord have?',
    ['One artery and two veins','Two arteries and one vein','One artery and one vein','Three arteries'], 'B',
    'A normal cord has two arteries and one vein. A single umbilical artery is associated with other anomalies, such as kidney and heart defects, and is reported.');
  mc('e1s1','Amniotic fluid','A low amount of amniotic fluid (oligohydramnios) may be associated with which fetal problem?',
    ['Kidney or urinary tract abnormalities','Too much fetal swallowing','Macrosomia only','Fetal hiccups'], 'A',
    'Much of the amniotic fluid after mid-pregnancy is fetal urine, so kidney problems or blocked urine flow can lower fluid levels. Oligohydramnios can also cause cord compression and lung problems.');
  mc('e1s1','Teratogens & critical periods','During which period is the developing embryo most vulnerable to teratogens such as alcohol and certain drugs?',
    ['Weeks 3–8 after conception, while the organs are forming','The last month of pregnancy','Only during labor','After birth'], 'A',
    'Organogenesis happens in the embryonic period, often before pregnancy is known, which is why teaching before conception is important.');
  mc('e1s1','Prenatal genetic testing','A client’s cell-free DNA screening result shows a high risk for Trisomy 21. What does the nurse explain?',
    ['The diagnosis is confirmed','This is a screening test; a diagnostic test such as amniocentesis or CVS is needed to confirm it','Nothing more can be done','The result is always wrong'], 'B',
    'Screening tests estimate risk. Diagnostic tests that sample fetal cells (chorionic villus sampling or amniocentesis) confirm a chromosomal condition.');
  mc('e1s1','Prenatal genetic testing','Which teaching is appropriate after an amniocentesis?',
    ['Expect a large gush of fluid afterward','Report fluid leaking from the vagina, bleeding, fever or strong cramping','Do heavy exercise the same day','No follow-up is needed'], 'B',
    'These signs may mean membrane rupture, infection or preterm labor. Rh-negative clients receive Rho(D) immune globulin after the procedure.');

  /* ---- Test 1: Professional nursing ---- */
  mc('e1s2','Advance directives','What is the purpose of a living will?',
    ['To name who inherits property','To state the treatments a person does or does not want if they cannot speak for themselves','To give the nurse power to make decisions','To replace informed consent'], 'B',
    'A living will is an advance directive. A durable power of attorney for health care names a person to make decisions on the client’s behalf.');
  mc('e1s2','Legal terms','A nurse keeps a competent adult from leaving the hospital against medical advice by blocking the door. This is:',
    ['Assault','False imprisonment','Slander','Negligence'], 'B',
    'Restraining a competent person or keeping them from leaving without legal authority is false imprisonment. The nurse instead explains the risks, notifies the provider, and documents an against-medical-advice discharge.');
  mc('e1s2','Incident reports','Which statement about incident (occurrence) reports is correct?',
    ['A copy goes in the client’s chart','The report is mentioned in the nursing notes','The report is used for quality improvement and is not placed in or referenced in the client’s chart','Only managers may complete one'], 'C',
    'The chart documents the facts of the event and the client’s condition. The incident report is a separate quality and risk management document.');
  mc('e1s2','Documentation','A nurse makes an error in a paper chart entry. What is the correct way to fix it?',
    ['Use correction fluid','Draw a single line through the error, write "error" (or per policy), and add initials and the date','Tear out the page','Scribble over it completely'], 'B',
    'The original entry must stay readable for legal reasons. Electronic records have their own correction process.');
  mc('e1s2','Scope of practice','Which document defines the legal scope of practice for a registered nurse?',
    ['The hospital’s policy manual','The state nurse practice act','The provider’s preferences','A nursing textbook'], 'B',
    'Each state’s nurse practice act, enforced by the board of nursing, defines what nurses may legally do. Facility policies can be stricter but not broader.');
  mc('e1s2','Good Samaritan laws','An off-duty nurse helps an injured person at a car crash. What do Good Samaritan laws generally do?',
    ['Require the nurse to stop at every emergency','Protect people who give reasonable emergency care in good faith and within their training','Protect the nurse even for reckless care','Require payment for the care'], 'B',
    'These laws encourage bystanders to help. They don’t protect gross negligence or care beyond the person’s training.');
  mc('e1s2','Consent & minors','Which minor can generally give consent for their own medical care?',
    ['A 15-year-old who lives with parents','An emancipated minor, such as one who is married or in the military','Any 12-year-old','A minor whose parents are at work'], 'B',
    'Emancipated minors can consent for themselves. State laws also let minors consent to certain services (such as STI care) without a parent.');
  mc('e1s2','Ethical dilemmas','A nurse has a moral objection to participating in a certain procedure. What should the nurse do?',
    ['Walk away when the procedure starts','Tell the supervisor in advance so the client’s care can be reassigned without leaving the client unattended','Refuse to care for the client at all','Try to talk the client out of it'], 'B',
    'Nurses may conscientiously object, but they must not abandon a client or impose their beliefs. Advance notice lets the unit arrange safe care.');
  mc('e1s2','Communication & safety','How should the nurse handle a telephone order from a provider?',
    ['Write it on a paper towel and enter it later','Write it down and read the full order back to the provider to confirm it','Ask a friend to listen','Carry it out without documenting'], 'B',
    'Read-back confirms the exact drug, dose, route and time. Verbal orders are limited to urgent situations and are signed by the prescriber per policy.');

  /* ---- Test 1: Growth & development ---- */
  mc('e1s3','Toddler behavior','A 2-year-old throws a tantrum in a safe place because a toy was taken away. What is the best parental response?',
    ['Give the toy back to stop the crying','Stay calm, make sure the child is safe, and ignore the tantrum until it ends','Spank the child','Lock the child in a room'], 'B',
    'Tantrums are a normal way for toddlers to show frustration as they seek autonomy. Consistent responses that don’t reward the tantrum help it fade.');
  mc('e1s3','Toilet training','Which sign shows a toddler may be ready for toilet training?',
    ['The child is 12 months old','The child stays dry for about 2 hours, can walk to the potty, and can tell a parent they need to go','The parent is ready','A sibling was trained at this age'], 'B',
    'Physical and emotional readiness usually appear between about 18 and 30 months. Training before the child is ready leads to frustration.');
  mc('e1s3','Preschool development','A 4-year-old talks about an imaginary friend. How should the nurse interpret this?',
    ['A sign of a mental health disorder','Normal preschool development related to imagination and magical thinking','A sign of loneliness requiring therapy','Lying that should be punished'], 'B',
    'Imaginary friends are common in preschoolers and help them practice social skills and cope with feelings.');
  mc('e1s3','Piaget stages','According to Piaget, which ability develops in adolescence?',
    ['Object permanence','Abstract and hypothetical thinking (formal operations)','Egocentrism','Parallel play'], 'B',
    'Adolescents can reason abstractly and consider possibilities, which supports health teaching about future consequences.');
  mc('e1s3','Language milestones','Which finding at a 2-year-old well visit should be referred for evaluation?',
    ['Uses two-word phrases','Says no words and doesn’t combine words','Says "no" often','Points to body parts'], 'B',
    'By 2 years, most children use 50 or more words and two-word phrases. No words by 16 months or no two-word phrases by 24 months warrants evaluation.');
  mc('e1s3','Motor milestones','Which finding in a 9-month-old needs follow-up?',
    ['Crawling','Unable to sit without support','Pulling to stand','Using a pincer grasp'], 'B',
    'Most infants sit alone steadily by about 8 months. Not sitting by 9 months may signal a motor delay.');
  mc('e1s3','Choking prevention','Which food is safest for a 2-year-old?',
    ['Whole grapes','Hot dog slices','Popcorn','Soft, cooked vegetables cut into small pieces'], 'D',
    'Round, firm foods such as whole grapes, hot dogs, nuts, hard candy and popcorn are common choking hazards for young children.');
  mc('e1s3','Adolescent nutrition','Why do adolescents need extra calcium?',
    ['To prevent acne','Most bone mass is built during adolescence, so calcium and vitamin D support lifelong bone health','To increase height after growth stops','Calcium isn’t needed in adolescence'], 'B',
    'Calcium needs peak during the teen growth spurt (about 1,300 mg/day). Many teens, especially girls, don’t get enough.');

  /* ---- Test 1: The hospitalized child ---- */
  mc('e1s4','Adolescent hospitalization','Which action best supports a hospitalized 15-year-old?',
    ['Assign a room with toddlers','Protect privacy, include the teen in decisions, and allow contact with friends','Talk only to the parents','Limit visitors to family'], 'B',
    'Adolescents fear loss of control, privacy and peer connection. Involving them in decisions supports independence and identity.');
  mc('e1s4','Fluid calculation','Using the standard maintenance fluid formula (100 mL/kg for the first 10 kg, then 50 mL/kg for the next 10 kg), how much fluid does a 15-kg child need in 24 hours?',
    ['1,000 mL','1,250 mL','1,500 mL','750 mL'], 'B',
    '10 kg × 100 mL = 1,000 mL, plus 5 kg × 50 mL = 250 mL, for a total of 1,250 mL/day.');
  mc('e1s4','PCA in children','A 12-year-old has patient-controlled analgesia (PCA) after surgery. Which teaching is correct?',
    ['Parents should press the button while the child sleeps','Only the child should press the button (unless policy authorizes another person), and the nurse monitors sedation and breathing','Press the button every 5 minutes no matter what','PCA is never used in children'], 'B',
    'Because only an alert patient can press the button, PCA has a built-in safety check. Others pressing it can cause oversedation.');
  mc('e1s4','IV safety','Why are IV fluids for young children given with an infusion pump and often a volume-control chamber?',
    ['To save money','To prevent accidental fluid overload','To make the IV run faster','Because gravity is safer'], 'B',
    'Small children can be harmed by even a modest extra volume. Pumps and volume-limiting devices control exactly how much they receive.');
  mc('e1s4','Reactions to hospitalization','Which action helps a hospitalized 3-year-old feel more in control?',
    ['Do procedures without explanation','Offer simple choices, such as which arm or which cup, and keep home routines when possible','Remove all familiar toys','Keep the parents out of the room'], 'B',
    'Preschoolers fear loss of control and body injury. Choices, routines, comfort objects and parent presence reduce distress.');
  mc('e1s4','Family coping','The sibling of a child with cancer has started acting out at school. What is the nurse’s best interpretation?',
    ['The sibling is just being difficult','Siblings may feel worried, jealous or neglected and need attention and age-appropriate information','The sibling needs punishment','This is unrelated to the illness'], 'B',
    'Serious illness affects the whole family. Including siblings, explaining what is happening, and keeping some routines help them cope.');

  /* ---- Test 2: Pregnancy ---- */
  mc('e2s1','Pregnancy discomforts','A pregnant client wakes at night with leg cramps. Which advice is best?',
    ['Point the toes downward','Straighten the leg and gently flex the foot upward (dorsiflex) to stretch the calf','Massage the calf deeply if it is swollen and red','Avoid all fluids'], 'B',
    'Dorsiflexing stretches the calf muscle and relieves the cramp. A painful, swollen, red calf could be a blood clot and should not be massaged.');
  mc('e2s1','Prenatal warning signs','Which symptom should a pregnant client report right away?',
    ['Mild ankle swelling at the end of the day','Sudden swelling of the face and hands with a severe headache','Occasional heartburn','Increased vaginal discharge without odor'], 'B',
    'Sudden facial and hand swelling with headache or vision changes may signal preeclampsia. Other warning signs include bleeding, fluid leakage and decreased fetal movement.');
  mc('e2s1','Fetal movement counts','A client at 32 weeks is counting fetal movements. When should she call her provider?',
    ['If she feels at least 10 movements in 2 hours','If she feels fewer than 10 movements in 2 hours','If the baby has hiccups','If the baby moves after a meal'], 'B',
    'Fewer movements than usual can be an early sign of fetal compromise and is evaluated with a nonstress test.');
  mc('e2s1','Prenatal visits','For a low-risk pregnancy, how often are prenatal visits usually scheduled between 28 and 36 weeks?',
    ['Every 4 weeks','Every 2 weeks','Every week','Once a month after 36 weeks'], 'B',
    'Typical schedule: every 4 weeks until 28 weeks, every 2 weeks from 28 to 36 weeks, then weekly until birth.');
  mc('e2s1','Pregnancy discomforts','A pregnant client has varicose veins in her legs. Which advice helps?',
    ['Cross the legs when sitting','Elevate the legs, avoid standing or sitting for long periods, and wear support stockings as advised','Wear tight knee-high socks','Avoid walking'], 'B',
    'Increased blood volume and pressure from the uterus slow blood return from the legs. Elevation, movement and compression help.');

  /* ---- Test 2: Labor & birth ---- */
  mc('e2s2','Fetal lie & presentation','What does "fetal lie" describe?',
    ['How flexed the fetal head is','The relationship of the fetus’s long axis to the mother’s long axis','How far the fetus has descended','The fetal heart rate'], 'B',
    'Lie is longitudinal (most common) or transverse. Presentation is the fetal part entering the pelvis first, and attitude describes flexion.');
  mc('e2s2','Breech presentation','In a breech presentation, where are fetal heart tones usually heard best?',
    ['Below the umbilicus','Above the umbilicus','Only over the pubic bone','They cannot be heard'], 'B',
    'In breech presentation the fetal back and chest are higher, so heart tones are heard above the umbilicus. An external cephalic version may be offered near term.');
  mc('e2s2','Fetal heart monitoring','What does moderate fetal heart rate variability (6–25 bpm) indicate?',
    ['Fetal distress','The fetus is well oxygenated with an intact nervous system','Cord compression','Maternal fever'], 'B',
    'Moderate variability is one of the most reassuring findings. Absent or minimal variability can signal hypoxia or medication effects.');
  mc('e2s2','Phases of the first stage','A laboring client at 9 cm is irritable, nauseated and says she can’t go on. Which phase is she in?',
    ['Latent phase','Transition phase','Second stage','Third stage'], 'B',
    'Transition (about 8–10 cm) is the most intense part of labor. The nurse gives encouragement, comfort and reassurance that birth is close.');
  mc('e2s2','Second-stage pushing','Which pushing technique is generally recommended in the second stage?',
    ['Holding the breath for as long as possible with each push','Open-glottis pushing (breathing out while pushing) with the natural urge','Pushing before full dilation','Lying flat on the back'], 'B',
    'Long breath-holding (Valsalva) can lower oxygen delivery to the fetus. Pushing with the urge, in upright or side-lying positions, is encouraged.');
  mc('e2s2','Third stage of labor','Which sign shows that the placenta has separated?',
    ['The uterus becomes boggy','The cord lengthens, there is a gush of blood, and the uterus becomes firm and rounded','The client feels the urge to push again before birth','Fetal heart rate decreases'], 'B',
    'The placenta usually delivers within 30 minutes of birth. Pulling on the cord before separation can invert the uterus.');
  mc('e2s2','Fourth stage of labor','How often are vital signs and the fundus assessed during the first hour after a vaginal birth?',
    ['Once','About every 15 minutes','Every 4 hours','Only if the client complains'], 'B',
    'The first hour carries the highest risk of hemorrhage. Frequent checks of the fundus, lochia, bladder and vital signs catch problems early.');
  mc('e2s2','Nonpharmacologic pain relief','A client in active labor wants to avoid medication. Which comfort measure can the nurse suggest?',
    ['Lying flat on the back','A warm shower or tub, position changes and a birthing ball','Holding the breath during contractions','Fasting completely'], 'B',
    'Warm water, movement, massage and breathing techniques reduce pain perception and can help labor progress.');
  mc('e2s2','Perineal lacerations','A client has a fourth-degree laceration after birth. Which order should the nurse question?',
    ['Stool softener','Ice pack to the perineum','Rectal suppository','Sitz bath'], 'C',
    'A fourth-degree laceration extends through the anal sphincter into the rectal mucosa, so rectal medications, enemas and rectal temperatures are avoided.');

  /* ---- Test 2: Postpartum ---- */
  mc('e2s3','Afterpains','A client who has had three babies has strong cramping when she breastfeeds on day 1. What should the nurse explain and do?',
    ['This means hemorrhage','Afterpains are common, especially in multiparas and during breastfeeding; an analgesic before feeding can help','Stop breastfeeding','Apply ice to the abdomen'], 'B',
    'Breastfeeding releases oxytocin, which contracts the uterus. Afterpains are stronger in people who have given birth before.');
  mc('e2s3','Postpartum physiologic changes','On day 2 after birth, a client is urinating large amounts and sweating heavily at night. What does the nurse tell her?',
    ['This means infection','This is a normal way the body gets rid of extra fluid from pregnancy','She needs IV fluids','She should restrict fluids'], 'B',
    'Postpartum diuresis and night sweats remove the extra fluid volume of pregnancy during the first days after birth.');
  mc('e2s3','Breast engorgement (not breastfeeding)','A client who is formula feeding has engorged breasts. Which advice is best?',
    ['Pump the breasts often','Wear a supportive bra, use ice packs, and avoid stimulating the breasts','Apply warm compresses often','Massage the nipples'], 'B',
    'Avoiding stimulation lets milk production stop. Pumping or heat would increase milk supply.');
  mc('e2s3','Breast engorgement (breastfeeding)','A breastfeeding client has full, hard, uncomfortable breasts on day 3. Which teaching helps?',
    ['Skip feedings until it improves','Breastfeed often, use warmth or a warm shower before feeding to help milk flow, and cold packs after','Bind the breasts tightly','Switch to formula'], 'B',
    'Frequent, effective emptying relieves engorgement. Hand expression to soften the areola can help the baby latch.');
  mc('e2s3','Postpartum depression','Which tool is commonly used to screen for postpartum depression?',
    ['APGAR score','Edinburgh Postnatal Depression Scale','Glasgow Coma Scale','Bishop score'], 'B',
    'The Edinburgh scale screens for depression and includes a question about thoughts of self-harm. Positive screens lead to follow-up and support.');
  mc('e2s3','Postpartum thromboembolism','Which measure helps prevent blood clots after birth?',
    ['Bed rest for 3 days','Early and frequent walking, staying hydrated, and using compression devices if ordered','Crossing the legs','Massaging a painful calf'], 'B',
    'The postpartum period carries a high risk of venous thromboembolism. Early movement is the simplest prevention. A painful, swollen calf is reported.');

  /* ---- Test 2: Family & community health ---- */
  mc('e2s4','Factitious disorder imposed on another','Which pattern raises concern for factitious disorder imposed on another (Munchausen syndrome by proxy)?',
    ['A child with one well-explained illness','Repeated, unexplained symptoms that occur only when one caregiver is present and resolve when the child is separated from them','A parent who asks many questions','A child who is shy'], 'B',
    'In this form of abuse, a caregiver fakes or causes illness in a child. Careful documentation and team evaluation are needed.');
  mc('e2s4','Child sexual abuse','Which finding is most concerning for sexual abuse in a 6-year-old?',
    ['Curiosity about where babies come from','A sexually transmitted infection or sexual knowledge far beyond the child’s age','Touching their own genitals occasionally','Asking about body differences'], 'B',
    'An STI in a young child (outside the newborn period) or age-inappropriate sexual behavior or knowledge requires reporting and evaluation.');
  mc('e2s4','Immunizations','At what age is the first dose of MMR vaccine routinely given?',
    ['At birth','2 months','12–15 months','5 years'], 'C',
    'The first MMR dose is given at 12–15 months and the second at 4–6 years. Earlier doses may be given before international travel.');
  mc('e2s4','Screen time','Which recommendation about screen time is appropriate for a 3-year-old?',
    ['Unlimited educational videos','Limit screen use to about 1 hour a day of high-quality programming, ideally watched with a parent','No limits are needed','Use screens at meals to keep the child calm'], 'B',
    'For children 2–5 years, about 1 hour a day of quality content is advised. Screens are avoided before 18–24 months except for video chatting.');
  mc('e2s4','Firearm safety','A parent says there is a handgun in the home. What is the safest storage advice?',
    ['Keep it loaded in a nightstand','Store it unloaded and locked, with ammunition locked separately','Hide it on a high shelf','Teach the toddler not to touch it'], 'B',
    'Locked, unloaded storage with separate ammunition greatly reduces the risk of unintentional injury and suicide. Children cannot be relied on to avoid guns.');
  mc('e2s4','Community resources','A mother of a toddler says she often runs out of food before the end of the month. What is the best nursing action?',
    ['Tell her to budget better','Refer her to resources such as WIC, SNAP, food banks or a social worker','Report her for neglect','Advise her to skip meals so the child can eat'], 'B',
    'Food insecurity is a social determinant of health. Connecting families with resources supports the child’s growth and development.');
  mc('e2s4','Bullying','Which change in a school-age child may suggest bullying?',
    ['Making new friends','Not wanting to go to school, frequent stomachaches, lost belongings or sudden mood changes','Better grades','Joining a sports team'], 'B',
    'Children often don’t report bullying directly. Nurses ask about it, including cyberbullying, and help families involve the school.');
})();
