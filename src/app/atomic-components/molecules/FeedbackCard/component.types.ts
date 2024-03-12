export interface IFeedbackCard {
  description: string
  image: IImage
  href: string
}

interface IImage {
  src: string
  width: number
  height: number
}
