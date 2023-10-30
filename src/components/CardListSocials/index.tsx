import React from 'react'
import { CardListSocialsContainer } from './styles'

interface CardListSocialProps {
  children: React.ReactNode
}

export function CardListSocial({ children }: CardListSocialProps) {
  return <CardListSocialsContainer>{children}</CardListSocialsContainer>
}
