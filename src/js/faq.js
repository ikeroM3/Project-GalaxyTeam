import Accordion from 'accordion-js';

new Accordion(".faq-list", {
    duration: 400,
    elementClass: 'faq-list-card',
    triggerClass: 'faq-list-question-container',
    panelClass: 'faq-list-answer-container',
});
