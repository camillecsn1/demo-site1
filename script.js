$(document).ready(function() {
	window.dataLayer = window.dataLayer || [];
	var path = document.location.pathname;
	
	switch (path) {
			
		case '/demo-site1/index.html':
			window.dataLayer.push({
				event: 'view_item_list',
				ecommerce: {
					currency: 'EUR',
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						index: 1,
						item_list_name: 'Home Featured Products',
						item_list_id: 'home_featured_products',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						currency: 'EUR'
					},
					{
						item_id: 'SKU-2',
						item_name: 'Classic XL Backpack',
						index: 2,
						item_list_name: 'Home Featured Products',
						item_list_id: 'home_featured_products',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 20,
						currency: 'EUR'
					},
					{
						item_id: 'SKU-3',
						item_name: 'Little America Backpack',
						index: 3,
						item_list_name: 'Home Featured Products',
						item_list_id: 'home_featured_products',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 18,
						currency: 'EUR'
					}],
					item_list_name: 'Home Featured Products',
					item_list_id: 'home_featured_products'
				}
			});
			
			$(document).on('click', '.tile-img a', function() {
				window.dataLayer.push({
					event: 'select_item',
					ecommerce: {
						currency: 'EUR',
						items:
						[{
							item_id: 'SKU-1',
							item_name: 'Wash Bag Chapter 5L',
							index: 1,
							item_list_name: 'Home Featured Products',
							item_list_id: 'home_featured_products',
							item_brand: 'Google Merchandise Store',
							item_category: 'goodies',
							item_variant: 'black',
							price: 15,
							currency: 'EUR'
						}]
					}
				});
			})
			
			$(document).on('click', '.btn-add', function() {
				window.dataLayer.push({
					event: 'add_to_cart',
					ecommerce: {
						currency: 'EUR',
						value: 15,
						items:
						[{
							item_id: 'SKU-1',
							item_name: 'Wash Bag Chapter 5L',
							index: 1,
							item_list_name: 'Home Featured Products',
							item_list_id: 'home_featured_products',
							item_brand: 'Google Merchandise Store',
							item_category: 'goodies',
							item_variant: 'black',
							price: 9.90,
							quantity: 1,
							currency: 'EUR'
						}]
					}
				});
			})
			break;
			
		case '/product/mug':
			window.dataLayer.push({
				event: 'view_item',
				ecommerce: {
					currency: 'EUR',
					value: 15,
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						index: 1,
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						currency: 'EUR'
					}]
				}
			});
			
			$(document).on('click', '.btn-add', function() {
				window.dataLayer.push({
					event: 'add_to_cart',
					ecommerce: {
						currency: 'EUR',
						value: 15,
						items:
						[{
							item_id: 'SKU-1',
							item_name: 'Wash Bag Chapter 5L',
							item_brand: 'Google Merchandise Store',
							item_category: 'goodies',
							item_variant: 'black',
							price: 15,
							quantity:1,
							currency: 'EUR'
						}]
					}
				});
			})
			break;
			
		case '/cart':
			window.dataLayer.push({
				event: 'view_cart',
				ecommerce: {
					currency: 'EUR',
					value: 50,
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						quantity: 2,
						currency: 'EUR'
					},
			
						item_id: 'SKU-2',
						item_name: 'Classic XL Backpack',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 20,
						quantity: 1,
						currency: 'EUR'
					}]
				}
			});
			
			$(document).on('click', '.btn-begin-checkout', function() {
				window.dataLayer.push({
					event: 'begin_checkout',
					ecommerce: {
						currency: 'EUR',
						value: 50,
						items:
						[{
							item_id: 'SKU-1',
							item_name: 'Wash Bag Chapter 5L',
							item_brand: 'Google Merchandise Store',
							item_category: 'goodies',
							item_variant: 'black',
							price: 15,
							quantity: 2,
							currency: 'EUR'
						},
						{
							item_id: 'SKU-2',
							item_name: 'Classic XL Backpack',
							item_brand: 'Google Merchandise Store',
							item_category: 'goodies',
							item_variant: 'black',
							price: 20,
							quantity: 1,
							currency: 'EUR'
						}]
					}
				});
				window.location.href = '/shipping';
			})
			break;
			
		case '/shipping':
			window.dataLayer.push({
				event: 'add_shipping_info',
				ecommerce: {
					currency: 'EUR',
					value: 50,
					shipping_tier: 'standard shipping',
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						quantity: 2,
						currency: 'EUR'
					},
					{
						item_id: 'SKU-2',
						item_name: 'Classic XL Backpack',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 20,
						quantity: 1,
						currency: 'EUR'
					}]
				}
			});
			
			$(document).on('click', '.btn-add-shipping-info', function() {
				/*
				window.dataLayer.push({
					event: 'add_shipping_info',
					ecommerce: {
						currency: 'EUR',
						value: 57.60,
						shipping_tier: 'standard shipping',
						items:
						[{
							item_id: 'SKU_123',
							item_name: 'Mug',
							item_brand: 'Converteo',
							item_category: 'goodies',
							item_variant: 'white',
							price: 9.90,
							quantity: 2,
							currency: 'EUR'
						},
						{
							item_id: 'SKU_456',
							item_name: 'Tee Shirt',
							item_brand: 'Converteo',
							item_category: 'clothes',
							item_variant: 'white',
							price: 33.90,
							quantity: 1,
							currency: 'EUR'
						}]
					}
				});
				*/
				window.location.href = '/payment';
			})
			break;
			
		case '/payment':
			window.dataLayer.push({
				event: 'add_payment_info',
				ecommerce: {
					currency: 'EUR',
					value: 50,
					payment_type: 'credit card',
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						quantity: 2,
						currency: 'EUR'
					},
					{
						item_id: 'SKU-2',
						item_name: 'Classic XL Backpack',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 20,
						quantity: 1,
						currency: 'EUR'
					}]
				}
			});
			
			$(document).on('click', '.btn-add-payment-info', function() {
				/*
				window.dataLayer.push({
					event: 'add_payment_info',
					ecommerce: {
						currency: 'EUR',
						value: 57.60,
						payment_type: 'credit card',
						items:
						[{
							item_id: 'SKU_123',
							item_name: 'Mug',
							item_brand: 'Converteo',
							item_category: 'goodies',
							item_variant: 'white',
							price: 9.90,
							quantity: 2,
							currency: 'EUR'
						},
						{
							item_id: 'SKU_456',
							item_name: 'Tee Shirt',
							item_brand: 'Converteo',
							item_category: 'clothes',
							item_variant: 'white',
							price: 33.90,
							quantity: 1,
							currency: 'EUR'
						}]
					}
				});
				*/
				window.location.href = '/transaction';
			})
			break;
			
		case '/transaction':
			window.dataLayer.push({
				event: 'purchase',
				ecommerce: {
					currency: 'EUR',
					transaction_id: 'TR1234',
					shipping: 3.90,
					tax: 4.23,
					value: 53.9,
					items:
					[{
						item_id: 'SKU-1',
						item_name: 'Wash Bag Chapter 5L',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 15,
						quantity: 2,
						currency: 'EUR'
					},
					{
						item_id: 'SKU-2',
						item_name: 'Classic XL Backpack',
						item_brand: 'Google Merchandise Store',
						item_category: 'goodies',
						item_variant: 'black',
						price: 20,
						quantity: 1,
						currency: 'EUR'
					}]
				}
			});
			break;
	}
	
});
