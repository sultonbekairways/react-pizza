import React, { useState } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

function PizzaBlock({id, name, imageUrl, price, types, sizes, isLoading, handleAddToCart }) {

    const availableTypes = ['тонкое', 'традиционное']
    const availableSize = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(sizes[0])

    const [activePrice, setActivePrice] = useState(price[availableSize.indexOf(activeSize)])

    const onSelectType = index => {
        setActiveType(index)
    }

    const onSelectSize = index => {
        setActiveSize(availableSize[index])
        setActivePrice(price[index])
    }

    const addPizzaToCart = () => {
        const pizza = {
            id,
            name,
            img: imageUrl,
            price: activePrice,
            type: availableTypes[activeType],
            size: activeSize,
            alikeCount: 1,
            alikePrice: activePrice
        }
        handleAddToCart(pizza)
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        availableTypes.map((type, index) =>
                            <li
                                key={type}
                                onClick={() => onSelectType(index)}
                                className={classNames({
                                    'active': activeType === index,
                                    'disabled': !types.includes(index)
                                })}>
                                {type}
                            </li>)
                    }

                </ul>
                <ul>
                    {
                        availableSize.map((size, index) =>
                            <li
                                key={size}
                                onClick={() => onSelectSize(index)}
                                className={classNames({
                                    'active': activeSize === size,
                                    'disabled': !sizes.includes(size)
                                })}>
                                {size} см.
                            </li>)
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">Цена: {activePrice}₽</div>

                <Button className="button--add" onClick={addPizzaToCart} outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span> Добавить</span>
                </Button>

            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.array.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    isLoading: PropTypes.bool,
}

PizzaBlock.defaultProps = {
    name: '⛔',
    price: '❌',
    types: [],
    sizes: [],
    isLoading: false
}

export default PizzaBlock
