'use client'

import type { ReactElement } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { CheckIcon } from './check'
import { CopyIcon } from './copy'
import { Button } from './button'

interface CopyToClipboardProps {
  getValue: () => string
  className?: string
}

export const CopyToClipboard = ({
  getValue,
  className
}: CopyToClipboardProps): ReactElement => {
  const [isCopied, setCopied] = useState(false)

  useEffect(() => {
    if (!isCopied) return
    const timerId = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => {
      clearTimeout(timerId)
    }
  }, [isCopied])

  const handleClick = useCallback(async () => {
    setCopied(true)
    if (!navigator?.clipboard) {
      console.error('Access to clipboard rejected!')
    }
    try {
      await navigator.clipboard.writeText(getValue())
    } catch {
      console.error('Failed to copy!')
    }
  }, [getValue])

  const IconToUse = isCopied ? CheckIcon : CopyIcon

  return (
    <Button onClick={handleClick} className={className}>
      <IconToUse className="nextra-copy-icon nx-pointer-events-none nx-h-4 nx-w-4" />
    </Button>
  )
}
