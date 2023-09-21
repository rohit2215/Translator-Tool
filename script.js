let isEnglish = true;
const englishText = [
    // ... Your English text here
    "President and unless, where the proposal contained in the Bill affects" +
            "the area, boundaries or name of any of the States 2***, the Bill has been" +
            "referred by the President to the Legislature of that State for expressing" +
            "its views thereon within such period as may be specified in the" +
            "reference or within such further period as the President may allow and" +
            "the period so specified or allowed has expired.",
            "[Explanation I.—In this article, in clauses (a) to (e), “State”" +
            "includes a Union territory, but in the proviso, “State” does not include a" +
            "Union territory." +
            "Explanation II.—The power conferred on Parliament by clause" +
            "(a) includes the power to form a new State or Union territory by uniting" +
            "a part of any State or Union territory to any other State or Union" +
            "territory.]",
            "4. Laws made under articles 2 and 3 to provide for the" +
            "amendment of the First and the Fourth Schedules and" +
            "supplemental, incidental and consequential matters.—(1) Any law" +
            "referred to in article 2 or article 3 shall contain such provisions for the" +
            "amendment of the First Schedule and the Fourth Schedule as may be" +
            "necessary to give effect to the provisions of the law and may also" +
            "contain such supplemental, incidental and consequential provisions" +
            "(including provisions as to representation in Parliament and in the" +
            "Legislature or Legislatures of the State or States affected by such law)" +
            "as Parliament may deem necessary."
];

const hindiText = [
    // ... Your Hindi text here
    "परंतुइस प्रयोजन के लिए कोई विधेयक राष्ट्रपति के स्वीकृत प्रस्तावना को" +
    "सिफारिश करने के लिए राज्यों में से किसी राज्य के विधानमंडल के द्वारा" +
    "सिफारिश नहीं किया गया है और उस प्रकार की सिफारिश नहीं हो गई है तब तक" +
    "जब तक उस राज्य के विधानमंडल द्वारा उस पर अपने विचार, जो संदर्भ में या" +
    "जो राष्ट्रपति द्वारा अनुमाति दी जाती है, प्रकट किए जाने के लिए वह विधेयक" +
    "राष्ट्रपति द्वारा उसे सिफारिश नहीं कर दिया गया है और इस प्रकार सिफारिश" +
    "या अनुमति से दिए गए समय का समय समाप्त हो गया है ।]",
    "3" +
    "[स्पष्टीकरण 1–इस अनुच्छेद में, क्लॉज (क) से क्लॉज (अ) तक, “राज्य” को संघ" +
    "राज्य भी शामिल है, परंतु प्रावधान में, “राज्य” संघ राज्य नहीं है ।" +
    "स्पष्टीकरण 2–क्लॉज (क) द्वारा संसद को प्रदान की गई शक्ति की श्रेणी (क) में" +
    "संघ राज्य या संघ राज्य से किसी अन्य संघ राज्य या संघ राज्य से किसी भाग" +
    "को एक करने वाले एक नये संघ राज्य या संघ राज्य को बनाने की शक्ति शामिल है ।]",
    "4. पहले अनुसूची और चौथी अनुसूची के संशोधन और सहायक, यात्रिक और परिणामी" +
    "विषयों के लिए अनुच्छेद 2 और अनुच्छेद 3 के तहत किए गए कानूनों के लिए." +
    "—(1) अनुच्छेद 2 या अनुच्छेद 3 में उल्लिखित किसी भी कानून में विधियों की" +
    "ऐसी प्रावधान होनी चाहिए जो कानून की प्रावधानिक क्रियान्वयन को प्राप्त करने के" +
    "लिए आवश्यक हो और वह भी ऐसे सहायक, यात्रिक और परिणामी प्रावधानों को शामिल कर" +
    "सकती है (जैसे कि संसद द्वारा तय की जाने वाली राज्य या राज्यों की संसद और" +
    "विधानमंडल या विधानमंडलों में प्रतिनिधित्व के बारे में प्रावधानों की तरह)" +
    "जैसा कि संसद समझे ।"
];

let isAuthRequired = true;

function togglePopup() {
    const popupContainer = document.getElementById("popupContainer");
    if (isAuthRequired) {
        popupContainer.style.display = "flex";
    } else {
        toggleText();
    }
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}

function toggleText() {
    const boxes = document.querySelectorAll('.box p');
    if (isEnglish) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = hindiText[i];
        }
        isEnglish = false;
    } else {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = englishText[i];
        }
        isEnglish = true;
    }
}

function authenticate() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    
    // Check if the entered phone number has exactly 10 digits
    if (/^\d{10}$/.test(phoneNumber)) {
        // You can implement phone number verification here.
        // For simplicity, I'm setting isAuthRequired to false for demonstration purposes.
        // In a real application, you would implement proper authentication logic.
        isAuthRequired = false;
        closePopup(); // Close the authentication popup
        toggleText();
    } else {
        alert("Please enter a 10-digit phone number.");
    }
}
