import React from "react";
import { Image, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
  id: number | string;
  size: "small" | "large";
  title: string;
  imageSrc: string;
  price: number | string;
}

export const ProductImage: React.FC<Props> = ({
  id,
  size,
  title,
  imageSrc,
  price,
}) => {
  const navigate = useNavigate();
  return (
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Text type="secondary">{title.slice(0, 25)}</Text>
        <Text type="danger" strong>
          ￥ {price} 起
        </Text>
      </div>
    </Link>
  );
};
