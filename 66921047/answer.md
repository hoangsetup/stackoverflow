You should return a boolean value for the filter callback function. To detect at least one lease item have status is `P` (instead of `p`, I think so).


Demo:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const input = {
      "results": [
        {
          "contract": {
            "id": 445134,
            "reference": "L|2190197",
            "label": "APREMIS",
            "status": null,
            "payment_mode": null,
            "address": {
              "street": "1 RUE DES ALPILLES",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80000",
              "city": "AMIENS"
            },
            "billing_address": {
              "street": "1 RUE DES ALPILLES",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80090",
              "city": "AMIENS"
            },
            "primary_bank_account": {
              "bank": "",
              "iban": "",
              "bic": "",
              "name_of_account_holder": "",
              "rib": "   ",
              "rum": "",
              "blz": null,
              "account_number": null
            },
            "dedicated_bank_account": {
              "bank": "",
              "iban": "",
              "bic": ""
            },
            "number": "2190197",
            "day_of_collection": 0,
            "direct_debit_start_date": "-0001-11-30",
            "validate": false,
            "balance": -629.64,
            "signed": true,
            "company": null,
            "contacts": [],
            "rent_components": []
          },
          "leases": [
            {
              "reference": null,
              "metering_service_data": null,
              "start_date": "2019-03-05",
              "end_date": "-0001-11-30",
              "presumed_end_date": "-0001-11-30",
              "signing_date": "2019-02-20",
              "expected_rent_deposit": 0,
              "actual_rent_deposit": 0,
              "rent_amount": 217.83,
              "vat": 0,
              "charge_amount": 96.99,
              "flat_category": "Logement",
              "flat_category_id": 291,
              "flat_type": "COLLECTIF TYPE 1BIS",
              "flat_type_id": 618,
              "cost_contribution": 0,
              "tenant_rank": 9,
              "status": "P",
              "end_inspection": null,
              "number_of_occupants": null,
              "move_in_date": null,
              "handover_date": null,
              "move_out_date": null,
              "id": 837057,
              "leaving_reason": null,
              "notice_period": null,
              "flat": {
                "id": 332705,
                "reference": "OP80|SUDE|41|70|AL01|A|2|MISLCAL108",
                "reference_label": "MISLCAL108",
                "label": "MISLCAL108",
                "flat_contact": [],
                "valid": {
                  "from": "1975-12-01",
                  "to": "-0001-11-30"
                },
                "address": {
                  "street": "1 RUE DES ALPILLES",
                  "label": null,
                  "kind": "main",
                  "country": "",
                  "federal_state": "",
                  "postal_code": "80090",
                  "city": "AMIENS"
                },
                "unique_credit_identifier": null,
                "parent_reference": "OP80|SUDE|41|70|AL01|A|2",
                "legal_model_space": "",
                "useful_space": 0,
                "corrected_space": 0,
                "new_rent_amount": null,
                "rental_charge": null,
                "condition": "",
                "location": "108",
                "immovable_property_valuation": 0,
                "valuation_year": 0,
                "comment": null,
                "category": "Logement",
                "category_id": 291,
                "type": "COLLECTIF TYPE 1BIS",
                "type_id": 618,
                "real_space": 36,
                "living_space": 31,
                "unit_for_flat_space": null,
                "vacant": false,
                "vacant_from": null,
                "vacancy_reason": null,
                "construction_date": "-0001-11-30",
                "floor": null,
                "bk01": {
                  "main_account_number": null,
                  "property_account_number": null,
                  "branch_account_number": null
                },
                "surface_for_hot_water_consumption": null,
                "metering_service_data": null
              },
              "contacts": []
            }
          ],
          "tenants": [],
          "insurances": [
            {
              "id": 334281,
              "name": "MAIF",
              "insurance_policy": "2388193 H",
              "reference": "",
              "home": "",
              "start_date": "2021-01-01",
              "end_date": "2021-12-31"
            }
          ]
        },
        {
          "contract": {
            "id": 445147,
            "reference": "L|2190211",
            "label": "APREMIS",
            "status": null,
            "payment_mode": null,
            "address": {
              "street": "4 ALLEE PIERRE ROLLIN",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80000",
              "city": "AMIENS"
            },
            "billing_address": {
              "street": "4 ALLEE PIERRE ROLLIN",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80090",
              "city": "AMIENS"
            },
            "primary_bank_account": {
              "bank": "",
              "iban": "",
              "bic": "",
              "name_of_account_holder": "",
              "rib": "   ",
              "rum": "",
              "blz": null,
              "account_number": null
            },
            "dedicated_bank_account": {
              "bank": "",
              "iban": "",
              "bic": ""
            },
            "number": "2190211",
            "day_of_collection": 0,
            "direct_debit_start_date": "-0001-11-30",
            "validate": false,
            "balance": -908.28,
            "signed": true,
            "company": null,
            "contacts": [],
            "rent_components": []
          },
          "leases": [
            {
              "reference": null,
              "metering_service_data": null,
              "start_date": "2019-03-06",
              "end_date": "-0001-11-30",
              "presumed_end_date": "-0001-11-30",
              "signing_date": "2019-02-26",
              "expected_rent_deposit": 0,
              "actual_rent_deposit": 0,
              "rent_amount": 331.66,
              "vat": 0,
              "charge_amount": 122.48,
              "flat_category": "Logement",
              "flat_category_id": 291,
              "flat_type": "COLLECTIF TYPE 2",
              "flat_type_id": 619,
              "cost_contribution": 0,
              "tenant_rank": 8,
              "status": "P",
              "end_inspection": null,
              "number_of_occupants": null,
              "move_in_date": null,
              "handover_date": null,
              "move_out_date": null,
              "id": 837473,
              "leaving_reason": null,
              "notice_period": null,
              "flat": {
                "id": 331154,
                "reference": "OP80|SUDE|52|89|RO02|C|0|PRBLCRO058",
                "reference_label": "PRBLCRO058",
                "label": "PRBLCRO058",
                "flat_contact": [],
                "valid": {
                  "from": "1980-10-16",
                  "to": "-0001-11-30"
                },
                "address": {
                  "street": "4 ALLEE PIERRE ROLLIN",
                  "label": null,
                  "kind": "main",
                  "country": "",
                  "federal_state": "",
                  "postal_code": "80090",
                  "city": "AMIENS"
                },
                "unique_credit_identifier": null,
                "parent_reference": "OP80|SUDE|52|89|RO02|C|0",
                "legal_model_space": "",
                "useful_space": 0,
                "corrected_space": 0,
                "new_rent_amount": null,
                "rental_charge": null,
                "condition": "",
                "location": "58",
                "immovable_property_valuation": 0,
                "valuation_year": 0,
                "comment": null,
                "category": "Logement",
                "category_id": 291,
                "type": "COLLECTIF TYPE 2",
                "type_id": 619,
                "real_space": 54,
                "living_space": 54,
                "unit_for_flat_space": null,
                "vacant": false,
                "vacant_from": null,
                "vacancy_reason": null,
                "construction_date": "-0001-11-30",
                "floor": null,
                "bk01": {
                  "main_account_number": null,
                  "property_account_number": null,
                  "branch_account_number": null
                },
                "surface_for_hot_water_consumption": null,
                "metering_service_data": null
              },
              "contacts": []
            }
          ],
          "tenants": [],
          "insurances": [
            {
              "id": 334294,
              "name": "MAIF",
              "insurance_policy": "2388193 H",
              "reference": "",
              "home": "",
              "start_date": "2021-01-01",
              "end_date": "2021-12-31"
            }
          ]
        },
        {
          "contract": {
            "id": 445170,
            "reference": "L|2190237",
            "label": "APREMIS",
            "status": null,
            "payment_mode": null,
            "address": {
              "street": "34 RUE DU 31 AOUT 1944",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80000",
              "city": "AMIENS"
            },
            "billing_address": {
              "street": "34 RUE DU 31 AOUT 1944",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80090",
              "city": "AMIENS"
            },
            "primary_bank_account": {
              "bank": "",
              "iban": "",
              "bic": "",
              "name_of_account_holder": "",
              "rib": "   ",
              "rum": "",
              "blz": null,
              "account_number": null
            },
            "dedicated_bank_account": {
              "bank": "",
              "iban": "",
              "bic": ""
            },
            "number": "2190237",
            "day_of_collection": 0,
            "direct_debit_start_date": "-0001-11-30",
            "validate": false,
            "balance": -834.2,
            "signed": true,
            "company": null,
            "contacts": [],
            "rent_components": []
          },
          "leases": [
            {
              "reference": null,
              "metering_service_data": null,
              "start_date": "2019-03-05",
              "end_date": "-0001-11-30",
              "presumed_end_date": "-0001-11-30",
              "signing_date": "2019-03-01",
              "expected_rent_deposit": 0,
              "actual_rent_deposit": 0,
              "rent_amount": 311.21,
              "vat": 0,
              "charge_amount": 105.89,
              "flat_category": "Logement",
              "flat_category_id": 291,
              "flat_type": "COLLECTIF TYPE 4",
              "flat_type_id": 621,
              "cost_contribution": 0,
              "tenant_rank": 9,
              "status": "P",
              "end_inspection": null,
              "number_of_occupants": null,
              "move_in_date": null,
              "handover_date": null,
              "move_out_date": null,
              "id": 826780,
              "leaving_reason": null,
              "notice_period": null,
              "flat": {
                "id": 299105,
                "reference": "OP80|CENT|7|8|AO34|A|4|318LCAO024",
                "reference_label": "318LCAO024",
                "label": "318LCAO024",
                "flat_contact": [],
                "valid": {
                  "from": "1958-11-01",
                  "to": "-0001-11-30"
                },
                "address": {
                  "street": "34 RUE DU 31 AOUT 1944",
                  "label": null,
                  "kind": "main",
                  "country": "",
                  "federal_state": "",
                  "postal_code": "80090",
                  "city": "AMIENS"
                },
                "unique_credit_identifier": null,
                "parent_reference": "OP80|CENT|7|8|AO34|A|4",
                "legal_model_space": "",
                "useful_space": 0,
                "corrected_space": 0,
                "new_rent_amount": null,
                "rental_charge": null,
                "condition": "",
                "location": "24",
                "immovable_property_valuation": 0,
                "valuation_year": 0,
                "comment": null,
                "category": "Logement",
                "category_id": 291,
                "type": "COLLECTIF TYPE 4",
                "type_id": 621,
                "real_space": 55,
                "living_space": 55,
                "unit_for_flat_space": null,
                "vacant": false,
                "vacant_from": null,
                "vacancy_reason": null,
                "construction_date": "-0001-11-30",
                "floor": null,
                "bk01": {
                  "main_account_number": null,
                  "property_account_number": null,
                  "branch_account_number": null
                },
                "surface_for_hot_water_consumption": null,
                "metering_service_data": null
              },
              "contacts": []
            }
          ],
          "tenants": [],
          "insurances": [
            {
              "id": 334319,
              "name": "AXA",
              "insurance_policy": "2659495304",
              "reference": "",
              "home": "",
              "start_date": "2021-01-01",
              "end_date": "2021-12-31"
            }
          ]
        },
        {
          "contract": {
            "id": 445240,
            "reference": "L|2190322",
            "label": "APREMIS",
            "status": null,
            "payment_mode": null,
            "address": {
              "street": "26 -34 RUE DE LA DODANE",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80000",
              "city": "AMIENS"
            },
            "billing_address": {
              "street": "26 -34 RUE DE LA DODANE",
              "label": null,
              "kind": "main",
              "country": "",
              "federal_state": "",
              "postal_code": "80000",
              "city": "AMIENS"
            },
            "primary_bank_account": {
              "bank": "",
              "iban": "",
              "bic": "",
              "name_of_account_holder": "",
              "rib": "   ",
              "rum": "",
              "blz": null,
              "account_number": null
            },
            "dedicated_bank_account": {
              "bank": "",
              "iban": "",
              "bic": ""
            },
            "number": "2190322",
            "day_of_collection": 0,
            "direct_debit_start_date": "-0001-11-30",
            "validate": false,
            "balance": -4489.57,
            "signed": true,
            "company": null,
            "contacts": [],
            "rent_components": []
          },
          "leases": [
            {
              "reference": null,
              "metering_service_data": null,
              "start_date": "2019-03-28",
              "end_date": "-0001-11-30",
              "presumed_end_date": "-0001-11-30",
              "signing_date": "2019-03-19",
              "expected_rent_deposit": 0,
              "actual_rent_deposit": 0,
              "rent_amount": 0,
              "vat": 0,
              "charge_amount": 0,
              "flat_category": "Foyer",
              "flat_category_id": 283,
              "flat_type": "COLLECTIF TYPE 1BIS",
              "flat_type_id": 618,
              "cost_contribution": 0,
              "tenant_rank": 1,
              "status": "S",
              "end_inspection": null,
              "number_of_occupants": null,
              "move_in_date": null,
              "handover_date": null,
              "move_out_date": null,
              "id": 840484,
              "leaving_reason": null,
              "notice_period": null,
              "flat": {
                "id": 301118,
                "reference": "OP80|CENT|89|149|DO26|A|1|DODDEDO012",
                "reference_label": "DODDEDO012",
                "label": "DODDEDO012",
                "flat_contact": [],
                "valid": {
                  "from": "1993-08-01",
                  "to": "-0001-11-30"
                },
                "address": {
                  "street": "26 -34 RUE DE LA DODANE",
                  "label": null,
                  "kind": "main",
                  "country": "",
                  "federal_state": "",
                  "postal_code": "80000",
                  "city": "AMIENS"
                },
                "unique_credit_identifier": null,
                "parent_reference": "OP80|CENT|89|149|DO26|A|1",
                "legal_model_space": "",
                "useful_space": 0,
                "corrected_space": 0,
                "new_rent_amount": null,
                "rental_charge": null,
                "condition": "",
                "location": "",
                "immovable_property_valuation": 0,
                "valuation_year": 0,
                "comment": null,
                "category": "Foyer",
                "category_id": 283,
                "type": "COLLECTIF TYPE 1BIS",
                "type_id": 618,
                "real_space": 27,
                "living_space": 27,
                "unit_for_flat_space": null,
                "vacant": false,
                "vacant_from": null,
                "vacancy_reason": null,
                "construction_date": "-0001-11-30",
                "floor": null,
                "bk01": {
                  "main_account_number": null,
                  "property_account_number": null,
                  "branch_account_number": null
                },
                "surface_for_hot_water_consumption": null,
                "metering_service_data": null
              },
              "contacts": []
            }
          ],
          "tenants": [
            {
              "person_id": 904316,
              "person_reference": "2162801",
              "person_first_name": "APREMIS",
              "person_last_name": "APREMIS",
              "birth_date": "1950-01-01",
              "title": "Association",
              "salutation": "ASSO",
              "status": "P",
              "arrival_date": "2019-03-28",
              "departure_date": null,
              "parent_link": null
            }
          ],
          "insurances": [
            {
              "id": 334394,
              "name": "MAIF",
              "insurance_policy": "2388193 H",
              "reference": "",
              "home": "",
              "start_date": "2021-01-01",
              "end_date": "2021-12-31"
            }
          ]
        }
      ]
    };

    const filtered = input.results.filter(result => {
      return result.leases.some(l => l.status === 'P');
    });

    console.log(filtered);

<!-- end snippet -->

