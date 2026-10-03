/* Additional questions written so there are three unique 100-question finals (part B: Tests 3, 5 and 6). */
(function(){
  const L = 'ABCDEFGH';
  const add = (unit, type, c, prompt, opts, correct, rationale) =>
    (window.EXTRA_ITEMS = window.EXTRA_ITEMS || []).push({ unit, item: { type, c, prompt, options: opts.map((o, i) => [L[i], o]), correct: correct.split(''), rationale } });
  const mc = (unit, ...a) => add(unit, 'mc', ...a);

  /* ---- Test 5: Cardiac ---- */
  mc('e5s1','Ductal-dependent defects','A newborn with transposition of the great arteries is deeply cyanotic. Which medication does the nurse expect to give until surgery?',
    ['Indomethacin','Prostaglandin E1 (alprostadil)','Digoxin','Furosemide'], 'B',
    'Prostaglandin E1 keeps the ductus arteriosus open so oxygenated and deoxygenated blood can mix. The nurse watches for apnea, a common side effect.');
  mc('e5s1','Hypoplastic left heart syndrome','Which statement about hypoplastic left heart syndrome (HLHS) is correct?',
    ['It is fixed with one simple surgery','It is usually treated with a series of staged surgeries (such as Norwood, Glenn and Fontan) or transplant','It resolves on its own','It only causes symptoms in adulthood'], 'B',
    'In HLHS the left side of the heart is underdeveloped. Staged surgeries make the right ventricle pump blood to the body.');
  mc('e5s1','Infective endocarditis','Which teaching helps prevent infective endocarditis in a child with certain heart defects or repairs?',
    ['Avoid brushing teeth to prevent gum bleeding','Keep up good dental care and regular dental visits, and take prophylactic antibiotics before certain dental procedures if prescribed','Take antibiotics every day for life','Avoid all vaccines'], 'B',
    'Bacteria from the mouth are a common cause of endocarditis. Good oral hygiene matters most, with antibiotic prophylaxis for high-risk children.');
  mc('e5s1','Pediatric hyperlipidemia','At what ages is universal cholesterol screening recommended for children?',
    ['At birth','Once between ages 9 and 11, and again between 17 and 21','Only if a parent has had a heart attack','Never in childhood'], 'B',
    'Universal screening finds familial hypercholesterolemia and other lipid disorders early. Children with risk factors may be screened sooner.');
  mc('e5s1','Blood pressure measurement','Which practice gives an accurate blood pressure in a child?',
    ['Use any adult cuff','Use a cuff whose bladder width is about 40% of the arm’s circumference','Use a cuff that is too small to make it fit snugly','Measure only in the leg'], 'B',
    'A cuff that is too small gives a falsely high reading, and one that is too large gives a falsely low reading. Readings are compared with norms for age, sex and height.');
  mc('e5s1','Post-op cardiac surgery','After heart surgery, a child has muffled heart sounds, falling blood pressure and a narrowing pulse pressure. What should the nurse suspect?',
    ['Normal recovery','Cardiac tamponade, which needs immediate notification of the surgical team','Dehydration only','Anxiety'], 'B',
    'Blood or fluid collecting around the heart restricts filling. Sudden decrease in chest tube drainage can also signal tamponade.');

  /* ---- Test 5: Respiratory ---- */
  mc('e5s2','Rhinosinusitis','Which history suggests bacterial sinusitis rather than a cold?',
    ['Runny nose for 3 days','Nasal discharge or daytime cough lasting more than 10 days without improvement, or worsening after starting to improve','Sneezing with itchy eyes','Clear discharge that is improving'], 'B',
    'Most colds improve within 10 days. Persistent or worsening symptoms, or high fever with purulent discharge, suggest bacterial sinusitis.');
  mc('e5s2','Inhaler technique','Which is the best way for a 3-year-old to take a metered-dose inhaler?',
    ['Spray it directly into the mouth','Use a valved spacer with a face mask','Only use a nebulizer','Take two puffs at once without a spacer'], 'B',
    'Young children can’t coordinate pressing and breathing in. A spacer with a mask delivers the medicine effectively.');
  mc('e5s2','Asthma medications','A child starts montelukast for asthma. What should parents watch for and report?',
    ['Increased appetite','Mood or behavior changes, such as nightmares, agitation or depression','Better sleep','Clearer skin'], 'B',
    'Montelukast carries a warning for neuropsychiatric effects, including suicidal thoughts. Families should report these right away.');
  mc('e5s2','Home oxygen safety','Which teaching is correct for a family using oxygen at home?',
    ['Smoking is fine if the window is open','No smoking or open flames near the oxygen, and keep it away from heat sources','Use petroleum-based lip balm on the face','Store tanks lying loose on the floor'], 'B',
    'Oxygen feeds fires. Families post no-smoking signs, keep tanks secured upright and use water-based lubricants.');

  /* ---- Test 5: Normal newborn ---- */
  mc('e5s3','Newborn reflexes','When the sole of a newborn’s foot is stroked, the toes fan out. How should the nurse interpret this?',
    ['Abnormal; report it','A normal positive Babinski reflex, which persists until about 1 year','A sign of a fracture','A sign of hypoglycemia'], 'B',
    'A fanning Babinski response is normal in infants because the nervous system is immature. It is abnormal in older children and adults.');
  mc('e5s3','Gestational age assessment','What does the New Ballard Score assess?',
    ['Pain level','Neuromuscular and physical maturity to estimate gestational age','Jaundice','Blood glucose'], 'B',
    'Ballard scoring looks at posture, skin, lanugo, plantar creases, breast tissue, ears and genitals to classify the newborn as preterm, term or post-term.');
  mc('e5s3','Newborn pain management','Which measure best reduces a newborn’s pain during a heel stick?',
    ['Doing it while the newborn is alone in the bassinet','Skin-to-skin contact or breastfeeding during the procedure','Warming the heel with very hot water','No measures are needed because newborns don’t feel pain'], 'B',
    'Newborns feel pain. Skin-to-skin contact, breastfeeding, swaddling and oral sucrose reduce procedural pain.');
  mc('e5s3','Newborn elimination','A breastfed newborn on day 5 has yellow, seedy, loose stools. What should the nurse tell the parents?',
    ['This is diarrhea','This is normal stool for a breastfed baby','The baby needs formula','This is meconium'], 'B',
    'Stools change from black meconium to greenish transitional stools to yellow, seedy breast-milk stools by about day 4–5.');

  /* ---- Test 5: Endocrine ---- */
  mc('e5s4','Insulin storage','How should an insulin pen that is currently being used be stored?',
    ['In the freezer','At room temperature, away from heat, for the number of days on the label (often about 28 days)','In a hot car','In direct sunlight'], 'B',
    'Unopened insulin is refrigerated. In-use insulin can stay at room temperature for the labeled time, and freezing or heat destroys it.');
  mc('e5s4','Insulin administration','Why should injection sites be rotated?',
    ['To make injections hurt less every time','To prevent lumpy fatty tissue (lipohypertrophy) that makes insulin absorption unpredictable','Because insulin stains the skin','It isn’t necessary'], 'B',
    'Repeated injections in the same spot cause fatty lumps that absorb insulin erratically. Sites are rotated within an area.');
  mc('e5s4','Diabetes & exercise','A child with type 1 diabetes is about to play soccer. What should the nurse teach?',
    ['Skip the meal before the game','Check blood glucose before activity and have a snack with carbohydrate if needed, and carry fast-acting sugar','Take extra insulin before playing','Avoid all sports'], 'B',
    'Exercise lowers blood glucose, sometimes for hours afterward. Checking before, during and after activity and having carbs available prevent lows.');
  mc('e5s4','Insulin pump safety','A child uses an insulin pump. Why does a blocked or disconnected infusion line need fast attention?',
    ['The pump uses long-acting insulin','The pump delivers only rapid-acting insulin, so glucose can rise and ketoacidosis can develop within hours','It causes hypoglycemia','It doesn’t matter'], 'B',
    'With no long-acting insulin on board, an interruption quickly leads to hyperglycemia and DKA. Families check glucose and ketones and have backup insulin pens.');
  mc('e5s4','Obesity complications','A child with obesity snores loudly and is very sleepy during the day. What should the nurse suspect?',
    ['Normal teenage behavior','Obstructive sleep apnea','Hypoglycemia','Asthma'], 'B',
    'Obesity is a major risk factor for sleep apnea, which can affect behavior, school performance and blood pressure. A sleep study is often ordered.');

  /* ---- Test 6: Infectious disease ---- */
  mc('e6s1','Mumps','A child with mumps has swollen parotid glands. Which precautions and complication does the nurse plan for?',
    ['Contact precautions; watch for pneumonia','Droplet precautions; watch for orchitis in males, meningitis and hearing loss','Airborne precautions; watch for rash','No precautions; no complications'], 'B',
    'Mumps spreads by droplets. The MMR vaccine prevents it.');
  mc('e6s1','Hand, foot & mouth disease','A toddler has fever, painful mouth sores and a rash on the palms and soles. What is the main nursing concern?',
    ['Bleeding','Dehydration because eating and drinking hurt','Hypertension','Vision loss'], 'B',
    'Hand, foot and mouth disease (coxsackievirus) is usually mild. Cold fluids, soft foods and pain relief keep the child hydrated.');
  mc('e6s1','Rotavirus','How is the rotavirus vaccine given?',
    ['As an IM injection at 1 year','By mouth, in a series starting at about 2 months','As a nasal spray','Only to adults'], 'B',
    'The oral rotavirus series begins in early infancy and prevents severe vomiting and diarrhea. It must be started before about 15 weeks of age.');
  mc('e6s1','Tetanus','A child steps on a rusty nail. The last tetanus-containing vaccine was 7 years ago. What does the nurse expect?',
    ['No action is needed','A tetanus booster, because more than 5 years have passed for a dirty wound','Antibiotics only','Rabies vaccine'], 'B',
    'For dirty or puncture wounds, a booster is given if more than 5 years have passed since the last dose. The wound is also cleaned thoroughly.');
  mc('e6s1','Vector-borne prevention','Which teaching helps protect a 2-year-old from mosquito-borne illness?',
    ['Avoid insect repellent completely','Use an EPA-registered repellent such as DEET (safe for children over 2 months), applied by an adult, along with long sleeves and nets','Apply repellent to the child’s hands','Use repellent under clothing'], 'B',
    'Adults apply repellent to exposed skin, avoiding the eyes, mouth and hands, and wash it off at the end of the day.');
  mc('e6s1','Hookworm','A child who often plays barefoot in soil has fatigue, pallor and a low hemoglobin. Which infection may be causing this?',
    ['Pinworm','Hookworm','Head lice','Lyme disease'], 'B',
    'Hookworm larvae enter through bare skin, and the adult worms cause intestinal blood loss and iron deficiency anemia. Wearing shoes prevents it.');
  mc('e6s1','Infection control','Which hand hygiene method is needed after caring for a child with C. difficile diarrhea?',
    ['Alcohol-based hand rub','Washing with soap and water','Wiping hands with a dry towel','Gloves alone, with no hand hygiene'], 'B',
    'Alcohol does not kill C. difficile spores. Soap and water physically remove them, along with contact precautions.');

  /* ---- Test 6: Neuro / neuromuscular ---- */
  mc('e6s2','Spina bifida','A child with spina bifida has a neurogenic bladder. Which skill will the family most likely learn?',
    ['Bladder irrigation every hour','Clean intermittent catheterization on a schedule','Fluid restriction to 500 mL a day','Using diapers only, with no other care'], 'B',
    'Regular catheterization empties the bladder, preventing urinary tract infections and kidney damage. Older children often learn to do it themselves.');
  mc('e6s2','Concussion','A teen athlete has a concussion during a game. Which teaching is correct?',
    ['Return to the game once the headache eases','No return to play the same day; follow a gradual return to school and sports once symptoms are gone, with provider clearance','Stay in a dark room for 2 weeks','Concussions never need follow-up'], 'B',
    'A second hit before recovery can cause serious brain injury. Recovery includes gradual return to learning and then to play.');
  mc('e6s2','Epilepsy management','A child with hard-to-control epilepsy starts a ketogenic diet. Which statement is correct?',
    ['It is high in carbohydrates','It is high in fat and very low in carbohydrates, and must be followed exactly under a dietitian’s supervision','Parents can add treats freely','It replaces all monitoring'], 'B',
    'The ketogenic diet produces ketosis, which reduces seizures. Even small carbohydrate additions (such as in some medications) can break ketosis.');
  mc('e6s2','Absence seizures','A teacher reports that a child often stares blankly for a few seconds and doesn’t respond, then continues as if nothing happened. What might this be?',
    ['Daydreaming that needs no follow-up','Absence seizures, which should be evaluated','Hearing loss only','Defiant behavior'], 'B',
    'Absence seizures are brief lapses in awareness that can happen many times a day and are often mistaken for inattention.');
  mc('e6s2','Cerebral palsy medications','A child with cerebral palsy takes baclofen for spasticity. Which teaching is most important?',
    ['Stop it suddenly if the child seems sleepy','Never stop it suddenly, because withdrawal can cause seizures, high fever and dangerous spasticity','Double the dose when spasms worsen','Take it only on weekends'], 'B',
    'Baclofen must be tapered. Abrupt withdrawal, especially from an intrathecal pump, is a medical emergency.');
  mc('e6s2','Infant botulism','A 3-month-old has constipation, a weak cry, poor feeding and floppy muscles. The parent sweetened the pacifier with honey. What should the nurse suspect?',
    ['Colic','Infant botulism','Teething','Reflux'], 'B',
    'Clostridium botulinum spores in honey can grow in an infant’s gut and produce a toxin that causes progressive weakness. Breathing must be monitored closely.');

  /* ---- Test 6: High-risk newborn ---- */
  mc('e6s3','Respiratory distress syndrome','A newborn at 28 weeks has grunting, retractions and increasing oxygen needs. What is the underlying cause and treatment?',
    ['Too much surfactant; give diuretics','Lack of surfactant; give surfactant through the breathing tube and respiratory support','Infection only; give antibiotics only','Normal for preterm infants; no treatment'], 'B',
    'Surfactant keeps the alveoli from collapsing and is not produced in enough amounts until late pregnancy. Antenatal steroids lower the risk.');
  mc('e6s3','Retinopathy of prematurity','Why do very preterm infants need regular eye exams?',
    ['To check for color blindness','To screen for retinopathy of prematurity, which is linked to prematurity and oxygen exposure','To check for cataracts only','Eye exams are not needed'], 'B',
    'Abnormal blood vessel growth in the retina can cause blindness. Careful oxygen saturation targets and timely screening reduce the risk.');
  mc('e6s3','Kangaroo care','What is a benefit of kangaroo (skin-to-skin) care for a stable preterm infant?',
    ['Increases heat loss','Helps regulate temperature, heart rate and breathing, and supports bonding and breastfeeding','Increases infection risk','Prevents parents from holding the baby'], 'B',
    'Skin-to-skin contact keeps the infant warm and calm and improves outcomes. It is encouraged as soon as the infant is stable.');
  mc('e6s3','Gavage feeding','Before giving a gavage (tube) feeding to a preterm infant, what must the nurse do?',
    ['Push the feeding as fast as possible','Verify tube placement per policy and check for feeding intolerance, such as abdominal distension','Lay the infant flat and prone with the head down','Heat the milk in the microwave'], 'B',
    'Correct placement prevents aspiration. Feedings run by gravity or pump while the infant is watched for distension, residuals or apnea.');
  mc('e6s3','Neonatal sepsis','Which findings suggest sepsis in a newborn?',
    ['High fever only','Temperature instability (often low), lethargy, poor feeding, apnea or breathing problems','Vigorous crying and good feeding','Pink skin and normal tone'], 'B',
    'Neonatal sepsis signs are often subtle. Cultures are drawn and antibiotics started quickly.');
  mc('e6s3','Polycythemia','A newborn has polycythemia (a very high hematocrit). Which complication does the nurse monitor for?',
    ['Anemia','Jaundice from increased red cell breakdown, and poor circulation','Dehydration only','Hypothermia only'], 'B',
    'Extra red blood cells thicken the blood and break down into bilirubin. Polycythemia is common in infants of diabetic mothers and growth-restricted infants.');
  mc('e6s3','Preterm thermoregulation','How is a very preterm infant (under 32 weeks) protected from heat loss right after birth?',
    ['Bathing immediately','Placing the infant, without drying the body, in a polyethylene wrap or bag under a radiant warmer','Leaving the infant uncovered for assessment','Placing the infant on a cold scale'], 'B',
    'Very preterm infants lose heat rapidly through thin skin. Plastic wrapping and a warm room are part of resuscitation guidelines.');
  mc('e6s3','Fetal alcohol spectrum disorder','Which facial features are associated with fetal alcohol syndrome?',
    ['Large eyes and a thick upper lip','A smooth philtrum, thin upper lip and small eye openings','Upslanting eyes and a single palmar crease','Cleft lip only'], 'B',
    'Prenatal alcohol exposure can also cause growth problems and lifelong learning and behavior difficulties. No amount of alcohol is known to be safe in pregnancy.');
  mc('e6s3','Bronchopulmonary dysplasia','A former preterm infant with bronchopulmonary dysplasia (chronic lung disease) is going home. Which need is especially important?',
    ['Low-calorie feedings','Extra calories for growth, because breathing harder uses more energy','Fluid overload to improve hydration','No vaccines'], 'B',
    'Infants with BPD often need concentrated feeds, sometimes oxygen and diuretics, and protection from respiratory infections, including RSV prevention and flu vaccination for household members.');

  /* ---- Test 6: GI & GU ---- */
  mc('e6s4','Umbilical hernia','A parent asks about their 6-month-old’s umbilical hernia. What is correct?',
    ['Tape a coin over it','Most close on their own by about age 4–5; report if it becomes hard, tender or discolored','It always needs surgery right away','It is caused by crying'], 'B',
    'Umbilical hernias are common and usually resolve. Coins and tape don’t help and can irritate the skin. Incarceration is rare but urgent.');
  mc('e6s4','Hypospadias repair care','After hypospadias repair, a toddler goes home with a urinary stent. Which teaching is correct?',
    ['Give tub baths right away','Use double diapering as instructed to protect the stent, avoid straddle toys, and report if urine stops draining','Remove the stent at home if it gets loose','Restrict fluids'], 'B',
    'Protecting the stent and repair is key. Fluids are encouraged to keep urine flowing.');
  mc('e6s4','Nephrotic syndrome medications','A child with nephrotic syndrome takes prednisone. Which teaching is important?',
    ['Stop it as soon as the swelling goes away','Don’t stop it suddenly; report fever or signs of infection; expect increased appetite and mood changes','It has no side effects','Get live vaccines during high-dose treatment'], 'B',
    'Steroids suppress the immune system and must be tapered. Children on high doses avoid live vaccines and exposure to illness.');
  mc('e6s4','Appendicitis','After surgery for a perforated appendix, which position helps contain infection in the abdomen?',
    ['Trendelenburg','Semi-Fowler’s or lying on the right side','Prone','Flat on the back'], 'B',
    'These positions help fluid drain toward the pelvis or the wound and keep infection localized. IV antibiotics and drains are common after perforation.');

  /* ---- Test 3: Antepartum ---- */
  mc('e3s1','Gestational hypertension','At 30 weeks, a client has a blood pressure of 144/92 on two readings, no protein in her urine, and no other symptoms. Her blood pressure was normal before pregnancy. This is classified as:',
    ['Chronic hypertension','Gestational hypertension','Preeclampsia with severe features','Normal pregnancy'], 'B',
    'New hypertension after 20 weeks without proteinuria or severe features is gestational hypertension. It needs close monitoring because it can progress to preeclampsia.');
  mc('e3s1','Preeclampsia prevention','A client at high risk for preeclampsia asks how to lower her risk. Which medication may be prescribed?',
    ['High-dose ibuprofen','Low-dose aspirin, usually started between 12 and 28 weeks (ideally before 16)','Magnesium sulfate tablets','Warfarin'], 'B',
    'Daily low-dose aspirin lowers the risk of preeclampsia in high-risk clients when started early in pregnancy.');
  mc('e3s1','Ectopic pregnancy','A client at 7 weeks has sudden severe one-sided pelvic pain, pain in her shoulder, dizziness and a falling blood pressure. What should the nurse suspect?',
    ['Normal round ligament pain','Ruptured ectopic pregnancy, which is a surgical emergency','Constipation','Heartburn'], 'B',
    'Shoulder pain comes from blood irritating the diaphragm. The nurse prepares for IV access, blood products and emergency surgery.');
  mc('e3s1','TORCH infections','Which teaching helps a pregnant client who works in a daycare reduce her risk of cytomegalovirus (CMV)?',
    ['Avoid all children','Wash hands well after diaper changes and avoid sharing utensils or cups with young children','Take antibiotics daily','Get the CMV vaccine'], 'B',
    'CMV is the most common congenital infection and can cause hearing loss and developmental problems. There is no vaccine, so hygiene is the main prevention.');
  mc('e3s1','Placenta previa','Which teaching is appropriate for a client with placenta previa who is being managed at home?',
    ['Resume intercourse when comfortable','Avoid intercourse and anything in the vagina (pelvic rest), and go to the hospital right away for any bleeding','Exercise vigorously to strengthen the uterus','Douche daily'], 'B',
    'Pelvic rest lowers the risk of bleeding. A complete previa requires cesarean birth.');

  /* ---- Test 3: Labor complications ---- */
  mc('e3s2','Precipitous birth','A client’s baby is crowning and the provider isn’t in the room. What should the nurse do?',
    ['Hold the client’s legs together','Stay with the client, call for help, and support the perineum and the baby’s head with gentle pressure to control the birth','Leave to find the provider','Push the head back'], 'B',
    'Holding the legs together or delaying birth can injure the baby and mother. The nurse supports a controlled birth, keeps the newborn warm and dry, and checks for a cord around the neck.');
  mc('e3s2','Malposition','A client with the fetus in an occiput posterior position has intense back pain during labor. Which measure helps?',
    ['Lying flat on her back','Hands-and-knees or side-lying positions with firm counterpressure on the lower back','Holding her breath','Walking is not allowed'], 'B',
    'These positions can help the fetus rotate to occiput anterior, and counterpressure eases "back labor."');

  /* ---- Test 3: Reproductive health ---- */
  mc('e3s3','Fibrocystic breast changes','A client has tender, lumpy breasts that get worse before her period. Which measure helps?',
    ['Avoid wearing a bra','Wear a supportive bra and use mild pain relievers such as NSAIDs as needed','Have the lumps drained every month','Stop all exercise'], 'B',
    'Fibrocystic changes are benign and cyclic. A new lump that doesn’t change with the cycle should still be evaluated.');
  mc('e3s3','Menopause','Which teaching helps prevent osteoporosis after menopause?',
    ['Avoid exercise','Get enough calcium and vitamin D, do weight-bearing exercise, and avoid smoking','Increase caffeine','Bone loss can’t be prevented'], 'B',
    'Falling estrogen speeds bone loss. Lifestyle measures and bone density screening help prevent fractures.');
  mc('e3s3','BPH (TURP care)','A client has continuous bladder irrigation after a transurethral resection of the prostate (TURP). Which finding needs action?',
    ['Light pink urine','Bright red urine with clots and decreased flow from the catheter','The client reports an urge to urinate','Clear yellow urine'], 'B',
    'The irrigation rate is adjusted to keep the output light pink and free of clots. Bright red urine with clots or blocked flow may mean bleeding or catheter obstruction.');

  /* ---- Test 3: STIs ---- */
  mc('e3s4','Syphilis','A client has a rash on the palms and soles, fever and swollen lymph nodes several weeks after a painless genital sore healed. Which stage of syphilis is this?',
    ['Primary','Secondary','Latent','Tertiary'], 'B',
    'Secondary syphilis appears weeks after the chancre and is highly contagious. It is still treated with benzathine penicillin G.');
  mc('e3s4','Genital herpes in pregnancy','A pregnant client has a history of genital herpes. Which plan is commonly recommended?',
    ['No treatment is needed','Suppressive antiviral medication starting at about 36 weeks to reduce outbreaks at birth','Planned cesarean for everyone with a history of herpes','Stop all prenatal care'], 'B',
    'Suppression lowers the chance of active lesions at labor. Cesarean is recommended if active lesions or warning symptoms are present when labor begins.');
  mc('e3s4','Partner treatment','What is expedited partner therapy?',
    ['Treating partners only after they get tested','Giving the client medication or a prescription to bring to their sex partner, where legally allowed','Reporting partners to the police','Asking partners to wait a month'], 'B',
    'Expedited partner therapy, mainly used for chlamydia and gonorrhea, gets partners treated faster and reduces reinfection.');
  mc('e3s4','Cervical cancer screening','At what age does routine cervical cancer screening usually begin for people with a cervix?',
    ['At first sexual activity','Age 21','Age 40','Age 65'], 'B',
    'Screening starts at 21 regardless of sexual history. It continues at intervals based on age and test type, even after HPV vaccination.');
  mc('e3s4','STI medications','Which teaching is correct for a client taking doxycycline?',
    ['Take it with milk','Take it with a full glass of water, stay upright for 30 minutes, avoid antacids or dairy close to the dose, and use sun protection','Take it lying down','Stop it once symptoms are gone'], 'B',
    'Doxycycline can irritate the esophagus and cause sun sensitivity. Calcium, iron and antacids reduce its absorption.');

  /* ---- Test 3: Contraception ---- */
  mc('e3s5','Vaginal ring','Which teaching is correct for the contraceptive vaginal ring?',
    ['Insert a new ring every day','Leave the ring in for 3 weeks, then remove it for 1 week (or follow the product directions)','Remove it before every intercourse for 24 hours','It protects against STIs'], 'B',
    'The ring releases estrogen and progestin. It carries the same precautions and warning signs as combined pills.');
  mc('e3s5','Contraceptive effectiveness','Which contraceptive methods are the most effective at preventing pregnancy with typical use?',
    ['Condoms and withdrawal','Long-acting reversible methods such as the implant and IUDs','Fertility awareness methods','Spermicide alone'], 'B',
    'LARC methods have failure rates under 1% because they don’t depend on daily use.');
  mc('e3s5','Spermicides','Which statement about nonoxynol-9 spermicide is correct?',
    ['It protects against HIV','Frequent use can irritate tissue and may increase the risk of HIV transmission','It is the most effective method alone','It can be used once a month'], 'B',
    'Spermicide used alone has a high failure rate and should not be relied on for STI protection.');
  mc('e3s5','Postpartum contraception','A breastfeeding client 2 weeks after birth asks about birth control. Which method is most appropriate now?',
    ['Combined estrogen pills','A progestin-only method, such as the mini-pill or implant','The contraceptive patch','No method is needed'], 'B',
    'Estrogen is avoided in the early postpartum weeks because of blood clot risk and possible effects on milk supply. Progestin-only methods and IUDs are good options.');
  mc('e3s5','Drug interactions with contraceptives','Which medication can make hormonal birth control pills less effective?',
    ['Acetaminophen','Rifampin','Vitamin C','Ibuprofen'], 'B',
    'Rifampin and some antiseizure medications speed up hormone metabolism. A backup or different method is recommended while taking them.');
})();
