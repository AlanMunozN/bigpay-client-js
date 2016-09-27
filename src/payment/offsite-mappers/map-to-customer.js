/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCustomer(data) {
    const { customer = {} } = data;

    return {
        customer_browser_info: navigator.userAgent,
        customer_email: customer.email,
        customer_first_name: customer.firstName,
        customer_geo_country_code: customer.geoCountryCode,
        customer_last_name: customer.lastName,
        customer_locale: customer.locale,
        customer_name: customer.name,
        customer_phone: customer.phoneNumber,
        customer_reference: customer.email,
    };
}
