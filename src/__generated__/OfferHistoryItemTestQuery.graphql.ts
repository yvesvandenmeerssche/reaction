/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { OfferHistoryItem_order$ref } from "./OfferHistoryItem_order.graphql";
export type OfferHistoryItemTestQueryVariables = {};
export type OfferHistoryItemTestQueryResponse = {
    readonly order: ({
        readonly " $fragmentRefs": OfferHistoryItem_order$ref;
    }) | null;
};
export type OfferHistoryItemTestQuery = {
    readonly response: OfferHistoryItemTestQueryResponse;
    readonly variables: OfferHistoryItemTestQueryVariables;
};



/*
query OfferHistoryItemTestQuery {
  order: ecommerceOrder(id: "foo") {
    __typename
    ...OfferHistoryItem_order
    __id: id
  }
}

fragment OfferHistoryItem_order on Order {
  offers {
    edges {
      node {
        id
        amount(precision: 2)
        createdAt(format: "MMM D")
        fromParticipant
        __id: id
      }
    }
  }
  lastOffer {
    id
    fromParticipant
    amount(precision: 2)
    shippingTotal(precision: 2)
    taxTotal(precision: 2)
    __id: id
  }
  totalListPrice(precision: 2)
  __id: id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "foo",
    "type": "String!"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "precision",
    "value": 2,
    "type": "Int"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": v3,
  "storageKey": "amount(precision:2)"
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fromParticipant",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "OfferHistoryItemTestQuery",
  "id": null,
  "text": "query OfferHistoryItemTestQuery {\n  order: ecommerceOrder(id: \"foo\") {\n    __typename\n    ...OfferHistoryItem_order\n    __id: id\n  }\n}\n\nfragment OfferHistoryItem_order on Order {\n  offers {\n    edges {\n      node {\n        id\n        amount(precision: 2)\n        createdAt(format: \"MMM D\")\n        fromParticipant\n        __id: id\n      }\n    }\n  }\n  lastOffer {\n    id\n    fromParticipant\n    amount(precision: 2)\n    shippingTotal(precision: 2)\n    taxTotal(precision: 2)\n    __id: id\n  }\n  totalListPrice(precision: 2)\n  __id: id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OfferHistoryItemTestQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "order",
        "name": "ecommerceOrder",
        "storageKey": "ecommerceOrder(id:\"foo\")",
        "args": v0,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "OfferHistoryItem_order",
            "args": null
          },
          v1
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "OfferHistoryItemTestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "order",
        "name": "ecommerceOrder",
        "storageKey": "ecommerceOrder(id:\"foo\")",
        "args": v0,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "offers",
            "storageKey": null,
            "args": null,
            "concreteType": "OfferConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "OfferEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Offer",
                    "plural": false,
                    "selections": [
                      v2,
                      v4,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "format",
                            "value": "MMM D",
                            "type": "String"
                          }
                        ],
                        "storageKey": "createdAt(format:\"MMM D\")"
                      },
                      v5,
                      v1
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "lastOffer",
            "storageKey": null,
            "args": null,
            "concreteType": "Offer",
            "plural": false,
            "selections": [
              v2,
              v5,
              v4,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "shippingTotal",
                "args": v3,
                "storageKey": "shippingTotal(precision:2)"
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "taxTotal",
                "args": v3,
                "storageKey": "taxTotal(precision:2)"
              },
              v1
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalListPrice",
            "args": v3,
            "storageKey": "totalListPrice(precision:2)"
          },
          v1
        ]
      }
    ]
  }
};
})();
(node as any).hash = 'd05d067f54d6211be6cb79d01d5febc7';
export default node;
