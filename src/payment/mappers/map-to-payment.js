import objectAssign from 'object-assign';
import { omitEmpty } from '../../common/utils';
import mapToCreditCard from './map-to-credit-card';

/**
 * Map to payment
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToPayment(data) {
    const { order = {}, payment = {}, paymentMethod = {} } = data;

    const payload = {
        device_info: payment.deviceData,
        gateway: paymentMethod.id,
        notify_url: order.callbackUrl,
    };

    if (payment.nouce) {
        objectAssign(payload, {
            credit_card_token: {
                token: payment.nouce,
            },
        });
    } else {
        objectAssign(payload, {
            credit_card: mapToCreditCard(data),
        });
    }

    return omitEmpty(payload);
}
