import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components'
import { setSortBy, setCategory } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

function Home() {
    const dispatch = useDispatch()

    // @ts-ignore
    const items = useSelector(({ pizzas }) => pizzas.items)
    // @ts-ignore
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    // @ts-ignore
    const { category, sortBy } = useSelector(({ filters }) => filters)

    useEffect(() => {
        dispatch(fetchPizzas({ category, sortBy }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortBy])

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSelectSort = useCallback(type => {
        dispatch(setSortBy(type))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddToCart = (pizza) => {
        dispatch(addPizzaToCart(pizza))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    // @ts-ignore
                    onClickItem={onSelectCategory}
                    activeCategory={category}
                    items={categoryNames} />
                <SortPopup
                    // @ts-ignore
                    items={sortItems}
                    activeSort={sortBy.type}
                    onSelectSort={onSelectSort} />
            </div>
            <h2 className="content__title">{category == null ? 'Все пиццы' : categoryNames[category]}</h2>
            <div className="content__items">
                {

                    isLoaded
                        ? items.map(pizza => <PizzaBlock key={pizza.id} id={pizza.id} isLoading={isLoaded} {...pizza} handleAddToCart={handleAddToCart} />)
                        : <PizzaLoadingBlock />
                }
            </div>
        </div>
    )
}

export default Home
