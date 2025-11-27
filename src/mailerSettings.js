export const DEFAULT_MAILER_SETTINGS = {
    fromName: "",
    sendTo: [
        { email: "ashok@transactify.solutions", name: "Admin" },
    ],
    sendToCC: [
        { email: "niyaz@transactify.solutions", name: "Niyaz" },
    ],
    subject: "New Enquiry from Website",
};

export const getMailerSettings = (overrides = {}) => ({
    ...DEFAULT_MAILER_SETTINGS,
    sendTo: overrides.sendTo ?? DEFAULT_MAILER_SETTINGS.sendTo.map((recipient) => ({ ...recipient })),
    sendToCC: overrides.sendToCC ?? DEFAULT_MAILER_SETTINGS.sendToCC.map((recipient) => ({ ...recipient })),
    ...overrides,
});
