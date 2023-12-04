# Fast Food

> a web app to order fast food notes made with react, vite, typescript and tailwind

![foodgif2](https://github.com/duanzin/fast_food-front/assets/115566934/531831c8-518c-43f0-bffb-a6272791e4d8)
![foodgif](https://github.com/duanzin/fast_food-front/assets/115566934/07f59c1c-6f9e-4bb8-b19f-bc3baf67d019)


## Setting up

Before anything, remember to set up the [back end](https://github.com/duanzin/fast_food-api) of this project first. After that, clone this repo and install all dependencies using:
```
npm i
```
To connect to the api, create an `.env` file based on the `.env.example`, where you will put your api url.

## Running the project

To start the app, run the following command

```
npm run dev
```

## Using the site
### Pedidos route

In the pedidos route there will be several food options, clicking them will add the to your order, which will show up at the bottom of the screen along with each individual item price and the total of your purchase.
You can click one of the Categories buttons to automatically scroll the page to the type of food youre looking for, or search an item by name. You must input the item's full name for the search to work.
Once you are done selecting items, you can click the Finalizar pedido button to insert your first name and any observations you may have about your order, then click the button again to send your order to the kitchen. You must input your name or it wont be sent. Alternatively, you can click the Cancelar button to remove everything from your order.

### Cozinha route

In the cozinha route all the orders made will be shown listing the customer's name, the order's id, all the items chosen and observations about the order, if there are any.
The orders are separated by finished(Pronto) and unfinished(Preparando). By default all orders are unfinished, but by clicking the green button you can change an order status to finished, and by pressing the red button you can delete that order. There is no way to set a finished order back to unfinished.

### Retirada route

In the retirada route the names of all customers whose orders havent been deleted will be listed, divided into finished(Pronto) and unfinished(Preparando) depending on their order status.
This page has no interactivity.
