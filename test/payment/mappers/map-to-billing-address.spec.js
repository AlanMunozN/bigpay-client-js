import mapToBillingAddress from '../../../src/payment/mappers/map-to-billing-address';
import paymentRequestDataMock from '../../mocks/payment-request-data';

describe('mapToBillingAddress', () => {
    let data;

    beforeEach(() => {
        data = paymentRequestDataMock;
    });

    it('should map to billing address', () => {
        const output = mapToBillingAddress(data);

        expect(output).toEqual({
            city: data.billingAddress.city,
            company: data.billingAddress.company,
            country_code: data.billingAddress.countryCode,
            country: data.billingAddress.country,
            email: data.customer.email,
            first_name: data.billingAddress.firstName,
            last_name: data.billingAddress.lastName,
            phone: data.billingAddress.phone,
            state_code: data.billingAddress.provinceCode,
            state: data.billingAddress.province,
            street_1: data.billingAddress.addressLine1,
            street_2: data.billingAddress.addressLine2,
            zip: data.billingAddress.postCode,
        });
    });
});
