import * as icons from 'lucide-react'

import { ContainerIcon, IconWrapper } from './styles'
import React from 'react'

interface IconProps {
  name: keyof typeof icons
  color?: string
  title: string
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export function ItemIcon({ name, variant, title }: IconProps) {
  const LucideIcon = icons[name] as React.ComponentType<{
    color?: string
    size?: number
    fill?: string
  }>

  return (
    <ContainerIcon>
      <IconWrapper variant={variant}>
        {LucideIcon && <LucideIcon color="#FFFFFF" fill="#FFF" size={16} />}
      </IconWrapper>
      <span>{title}</span>
    </ContainerIcon>
  )
}
