Please select either one of the deployment step to deploy the application

# Auto Deploy & Installation

## prerequisite

MAC OS only

Install aws-cli 
https://docs.aws.amazon.com/en_us/cli/latest/userguide/cli-chap-install.html

Install jq
https://stedolan.github.io/jq/download/

Install zip

Configurate default aws profile
https://docs.aws.amazon.com/en_us/cli/latest/userguide/cli-chap-configure.html

## How to use
1. Clone the project from https://github.com/stanleyyuenyiu/simple-serverless-cart

2. Navigate to the project clone path, run below command, it will use your default aws profile to execute
```
sh run.sh
```
Optional: 
To execute with other aws profile, replace below "[my_profile_name]" with your aws profile
```
sh run.sh [my_profile_name]
```

# Application Usage

## Demo Login User
```
{"user": "FORD", "password":"123456"},
{"user": "APPLE", "password":"123456"},
{"user": "NIKE", "password":"123456"},
{"user": "UNILEVER", "password":"123456"}
```

##Discount Rules

There are 3 major discount rules:

- Product Tier Price
- Product Group Price
- Shopping Cart Discount

###Product Tier Price
It represent the discount by purchased quantity per product

e.g While User A purchase 2 or more Product P, each Product P he purchased will be discounted

###Product Group Price
It represent the product will be discounted by user group

e.g While User A logined, each Matching Product by the discount rule will be discounted by default

###Shopping Cart Discounte
It represent the discount will apply finally on the whole purchase items, and the discount action will be Buy X quantity Get Y quantity Free depend on some specific conditions 
The discount action will then look up each product the user pruchased, to see if it is match the condition and calculate the total 

e.g While User A purchase 8 Product P, while the  discount rule each Product P he purchased will be discounted


##Sample Data

The sample data has imported by default while using the auto deployment script

To find the sample data, please see [here](https://github.com/stanleyyuenyiu/simple-serverless-cart/tree/master/data)

###Data Definition 

Data Table: ** _products**

It mainly store the products information, each product information contains the product tier price discount rules, product group price discount rules
Sample Data
```
{
  "group_price": [
    {
      "group": "APPLE",
      "price": 299.99
    },
    {
      "group": "FORD",
      "price": 309.99
    }
  ],
  "name": "Standout Ad",
  "price": 322.99,
  "product_id": 2,
  "sku": "standout",
  "tier_price": [
    {
      "group": "NIKE",
      "price": 379.99,
      "qty": "4"
    }
  ]
}
```


Data Table: ** _sales_rules**

It mainly store the shopping cart discount rule information, each record contains the rule matching condtions and the discount action
Sample Data
```
{
  "action": {
    "conditions": [
      {
        "entity": "sku",
        "operation": "eq",
        "value": "classic"
      }
    ],
    "discount": 1,
    "discount_step": 5,
    "type": "buy_x_get_y"
  },
  "conditions": [
    {
      "entity": "customer_group",
      "operation": "eq",
      "value": "FORD"
    }
  ],
  "name": "rule_B",
  "rule_id": 2
}
```








