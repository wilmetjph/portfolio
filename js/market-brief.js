const marketSelect = document.querySelector("#market-region");
const generateButton = document.querySelector("#generate-market-brief");
const briefResult = document.querySelector("#market-brief-result");

const marketBriefs = {
    global: {
        title: "Global Market Brief",
        overview: "Global markets are showing mixed momentum as investors balance economic resilience against uncertainty around inflation and monetary policy.",
        drivers: "Equity valuations, interest-rate expectations and currency movements remain the main forces shaping market performance.",
        risks: "Key risks include renewed inflation pressure, geopolitical tensions and weaker-than-expected economic growth."
    },
    us: {
        title: "United States Market Brief",
        overview: "US equities remain sensitive to changes in growth expectations and the outlook for Federal Reserve policy.",
        drivers: "Corporate earnings, technology-sector performance and bond yields are the principal market drivers.",
        risks: "High valuations and changing interest-rate expectations could increase market volatility."
    },
    europe: {
        title: "Europe Market Brief",
        overview: "European markets are navigating modest economic growth alongside evolving expectations for monetary policy.",
        drivers: "Interest rates, energy prices, currency movements and the outlook for industrial activity are central themes.",
        risks: "Political uncertainty, weak demand and renewed pressure on energy costs remain important risks."
    },
    asia: {
        title: "Asia Market Brief",
        overview: "Asian markets present contrasting trends across economies, currencies and policy environments.",
        drivers: "Chinese economic activity, Japanese monetary policy and global semiconductor demand are key influences.",
        risks: "Slower regional growth, currency volatility and geopolitical tensions could weigh on sentiment."
    }
};

generateButton.addEventListener("click", function () {
    const selectedMarket = marketSelect.value;
    const brief = marketBriefs[selectedMarket];

    generateButton.disabled = true;
    generateButton.textContent = "Generating...";

    window.setTimeout(function () {
        briefResult.innerHTML = `
            <h4>${brief.title}</h4>
            <p><strong>Market overview:</strong> ${brief.overview}</p>
            <p><strong>Key drivers:</strong> ${brief.drivers}</p>
            <p><strong>Risks to watch:</strong> ${brief.risks}</p>
            <p class="brief-disclaimer">Demonstration content — not investment advice.</p>
        `;

        briefResult.hidden = false;
        generateButton.disabled = false;
        generateButton.textContent = "Generate AI Market Brief";
    }, 700);
});
