import { BRAINTREE, BRAINTREE_PAYPAL, BRAINTREE_VISACHECKOUT } from '../payment-method-ids';
import { MULTI_OPTION } from '../payment-method-types';

export default class PaymentMethodIdMapper {
    /**
     * @returns {PaymentMethodIdMapper}
     */
    static create() {
        return new PaymentMethodIdMapper();
    }

    /**
     * @param {PaymentMethod} paymentMethod
     * @returns {string}
     */
    mapToId(paymentMethod) {
        let { id } = paymentMethod;

        if (paymentMethod.method === MULTI_OPTION) {
            id = paymentMethod.gateway;
        }

        if (id === BRAINTREE_PAYPAL || id === BRAINTREE_VISACHECKOUT) {
            return BRAINTREE;
        }

        return id;
    }
}
