import { getPaymentUrl } from './urls';
import { postRequest } from '../common/http-request';
import { isValid } from '../common/validation';
import { mapToHeaders, mapToPayload } from './mappers';
import { validatePaymentRequest } from './validators';

/**
 * Submit payment
 * @param {PaymentRequestData} data
 * @param {Object} [options = {}]
 * @param {string} [options.host]
 * @returns {Promise}
 */
export default function submitPayment(data, options = {}) {
    const validation = validatePaymentRequest(data);

    if (!isValid(validation)) {
        return Promise.reject(new Error({ validation }));
    }

    const payload = mapToPayload(data);
    const requestOptions = {
        headers: mapToHeaders(data),
    };

    return postRequest(getPaymentUrl(options.host), payload, requestOptions);
}
