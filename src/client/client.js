import { PAYMENT_TYPES, initializeOffsitePayment, submitPayment } from '../payment';

export default class Client {
    /**
     * Construct BigpayClient
     * @param {Object} config
     * @param {string} config.host
     */
    constructor({ host }) {
        this.host = host;
    }

    /**
     * Initialize offsite payment
     * @param {PaymentRequestData} data
     * @returns {Promise}
     */
    initializeOffsitePayment(data) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== PAYMENT_TYPES.HOSTED) {
            throw new Error(`${data.type} is not supported.`);
        }

        return initializeOffsitePayment(data, { host: this.host });
    }

    /**
     * Submit payment
     * @param {PaymentRequestData} data
     * @returns {Promise}
     */
    submitPayment(data) {
        const { paymentMethod = {} } = data;

        if (paymentMethod.type !== PAYMENT_TYPES.API) {
            throw new Error(`${data.type} is not supported.`);
        }

        return submitPayment(data, { host: this.host });
    }
}
