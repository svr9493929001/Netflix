function update() {
    const select = document.querySelector("#langauge")
    let value = select.options[select.selectedIndex].value;
    if (value == "Hindi") {
        const body = document.querySelector("body")
        body.innerHTML = `
        <div class="first">
            <!-- Menu bar-->
            <nav class="banner">
                <div class="bar">
                    <button class="sign-in" style="width : 100px">साइन इन करें</button>
                    <img class = "logo" src="./download.png" alt="" >
                    <select id="langauge" onchange="update()" style="right: 160px">
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
            </nav>
            <!-- Menu bar-->
            
            <!--content-->
            <div class="content">
                <h2>अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ.</h2>
                <h4>जहां चाहें देखें. जब चाहें कैंसल करें.</h4>
                <h4>देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.</h4>
                <input type="email" name="mail" id="" placeholder="ईमेल एड्रेस">
                <button class="get">साइन करें ></button>
            </div>
            <!--content-->
    </div>

    <div class="second">
        <div class="second-content">
            <h2>अपनी टीवी पर मज़ा लें.</h2>
            <h4>स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.</h4>
        </div>
    </div>

    <div class="third">
        <div class="third-content">
            <h2>ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें.</h2>
            <h4>अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.</h4>
        </div>
    </div>
    <div class="fourth">
        <div class="third-content">
            <h2>हर जगह देखें.</h2>
            <h4>बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.</h4>
        </div>
    </div>

    <div class="fifth">
        <div class="third-content">
            <h2>बच्चों के लिए प्रोफ़ाइल बनाएं.<h2>
            <h4>बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.</h4>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNo6ZpWRbbcwDLZReorXh8sxNqsecRc9rsA&usqp=CAU" alt="" class="fifth-img">
        </div>
    </div>
        `
    }
}
update()