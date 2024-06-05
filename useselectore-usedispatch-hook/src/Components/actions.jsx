// https://cdn.dribbble.com/userupload/9841292/file/original-68da608bda587baefaa09c59e75ee0eb.jpg?resize=400x0
// Project on 
// Customer Relationship Management (CRM) System
// Manage customer information and interaction history.
// Track sales leads and opportunities.
// Schedule follow-ups and tasks.
// Generate reports on sales performance.

export const addCustomer = (customer) => ({
    type: 'ADD_CUSTOMER'
})

export const addInteraction = (interaction) => ({
    type: 'ADD_INTERACTION'
})

export const addOpportunity = (opportunity) => ({
    type: 'ADD_OPPORTUNITY'
})