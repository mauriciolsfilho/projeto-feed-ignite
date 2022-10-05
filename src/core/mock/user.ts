import { UserProps } from "../types/app";

const mauricio = {
  name: "Maurício Linhares",
  description: "Web developer",
  email: "mauricio_1souza@outlook.com",
  imageUrl: "https://github.com/mauriciolsfilho.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
} as UserProps;

const mayk = {
  name: "Mayk Brito",
  email: "mayk@gmail.com",
  description: "Educator @Rocketseat",
  imageUrl: "https://github.com/maykbrito.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
} as UserProps;

const diego = {
  name: "Diego Fernandes",
  email: "diego3g@gmail.com",
  description: "CTO @Rocketseat",
  imageUrl: "https://github.com/diego3g.png",
  coverImageUrl:
    "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
} as UserProps;

export const authUser: UserProps = diego;
