import { ContentCardsMovies } from '../ContentCardsMovies'

export const ContentRowMovies = () => {
    const cards = [
        {
          title: 'Movies in Data Base',
          borderColor: 'border-left-primary',
          quantity: 21
        },
        {
          title: 'Total Awards',
          borderColor: 'border-left-success',
          quantity: 79
        },
        {
          title: 'Actors Quantity',
          borderColor: 'border-left-warning',
          quantity: 49
        }
      ]

    return(
        <div class="row">
        { cards.length > 0 && cards.map(card => {
            return(
                <ContentCardsMovies
                    key={card.title}
                    title={card.title}
                    borderColor={card.borderColor}
                    quantity={card.quantity} />
            )
        })}
        </div>
    )
}