import React from 'react'
import { CardHeaderContainer } from './styles'

interface CardHeaderProps {
  children: React.ReactNode
}

export function CardHeader({ children }: CardHeaderProps) {
  return <CardHeaderContainer>{children}</CardHeaderContainer>
}
