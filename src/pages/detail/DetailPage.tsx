import React from "react";
import styles from "./DetailPage.module.css";
import {useParams} from 'react-router-dom'

export const DetailPage: React.FC = () => {
  const params = useParams()
  console.log(params)
  const id = params.id
  return <h1>旅途路线详情页面，路线 id：{id}</h1>;
};
