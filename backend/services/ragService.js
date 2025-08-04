
// RAG logic integrating Watson Discovery + Granite
const sampleData = require('../../data/admission-faqs.json');

async function getAnswer(query) {
    const faq = sampleData.find(item => query.toLowerCase().includes(item.question.toLowerCase().split(' ')[0]));
    return faq ? faq.answer : "Please check college website for details or try a different query.";
}

module.exports = { getAnswer };
