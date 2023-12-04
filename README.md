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
## How to use
### Pedidos route

In the pedidos route there will be several options of food to choose, clicking one will add em to your order which will show up at the bottom of the page along with the food item price and the total of your purchase.
You can click one of the categories to make the screen roll to the food type youre looking for, or search it by name. You must input the whole name for the search to work.
Clicking the Cancelar button will remove all items from your order, While clicking the Finalizar pedido button will show your order and allow you to input your first name and any observations you want to add to your order. Clicking Finalizar pedido again will send your order to the kitchen. You must input your name or the order wont be sent.

### Cozinha route

In the cozinha route you will see all orders made on the pedidos page, separated by finished(pronto) and unfinished(preparando) and containing the id of the order, the name of the customer and all the items he ordered, as well as observations if there are any. By default all orders are unfinished, clicking the green button will mark them as finished, while clicking the red button will delete them.

### Retirada route

In the retirada route you will see the names of all customers whose orders havent been deleted yet, separated by finished(pronto) and unfinished(preparando). This page has no interactivity.
