import cn from 'clsx'
import Image from 'next/image'

export function Screenshot({ src, alt, full }) {
  return (
    <div
      className={cn(
        'mt-6 -mb-4 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800',
        full ? 'bg-white' : 'bg-zinc-100'
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'w-auto select-none bg-white',
          full ? '' : 'ring-1 ring-gray-200'
        )}
      />
    </div>
  )
}
