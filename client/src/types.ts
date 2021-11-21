export interface RecipeProps {
  name: string
  image: string
  season: string
  ingredients: IngredientsProps[]
  instructions: string[]
}

export interface IngredientsProps {
  name: string
  nb: number
}