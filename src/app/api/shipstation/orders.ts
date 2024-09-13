import type { NextApiRequest, NextApiResponse } from 'next';

// Function to return XML response
function generateXMLResponse() {
  const xmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
    <Orders>
      <Order>
        <OrderID>12345</OrderID>
        <OrderNumber>INV12345</OrderNumber>
        <OrderDate>2023-09-12</OrderDate>
        <OrderStatus>awaiting_shipment</OrderStatus>
        <LastModified>2023-09-12T14:30:00</LastModified>
        <ShippingMethod>Priority</ShippingMethod>
        <CustomerNotes>Please ship ASAP</CustomerNotes>
        <InternalNotes>Priority customer</InternalNotes>
        <Gift>false</Gift>
        <ShipTo>
          <Name>John Doe</Name>
          <Address1>123 Main St</Address1>
          <City>New York</City>
          <State>NY</State>
          <PostalCode>10001</PostalCode>
          <Country>US</Country>
          <Phone>555-555-5555</Phone>
          <Residential>true</Residential>
        </ShipTo>
        <Items>
          <Item>
            <SKU>ABC123</SKU>
            <Name>Sample Product</Name>
            <Quantity>2</Quantity>
            <UnitPrice>29.99</UnitPrice>
          </Item>
        </Items>
      </Order>
    </Orders>
  `;
  return xmlData;
}

// API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set Content-Type header to XML
  res.setHeader('Content-Type', 'application/xml');

  // Generate and send XML response
  const xmlResponse = generateXMLResponse();
  res.status(200).send(xmlResponse);
}
