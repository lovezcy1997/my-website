// directives/v-intersection.ts
import type { Directive, DirectiveBinding } from 'vue'

export interface IntersectionOptions {
    threshold?: number
    once?: boolean
    className?: string
    rootMargin?: string
    onEnter?: (el: HTMLElement) => void
    onLeave?: (el: HTMLElement) => void
}

const observerMap = new WeakMap<HTMLElement, IntersectionObserver>()

// 注意：这个指令没有 getSSRProps，它只在客户端工作
export default {
    // 不写 getSSRProps，让 SSR 跳过它
    mounted(el: HTMLElement, binding: DirectiveBinding<IntersectionOptions>) {
        // 如果是服务端，直接返回
        if (typeof window === 'undefined') return

        const options = binding.value || {}
        const className = options.className || 'inView'
        const threshold = options.threshold ?? 0.2
        const rootMargin = options.rootMargin || '0px'
        const once = options.once ?? false

        // 初始添加隐藏类
        el.classList.add(className)

        let observer: IntersectionObserver | null = null

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.remove(className)
                    options.onEnter?.(el)

                    if (once && observer) {
                        observer.unobserve(el)
                        observer.disconnect()
                        observerMap.delete(el)
                    }
                } else {
                    el.classList.add(className)
                    options.onLeave?.(el)
                }
            })
        }

        observer = new IntersectionObserver(handleIntersection, {
            threshold,
            rootMargin
        })

        observer.observe(el)
        observerMap.set(el, observer)
    },

    unmounted(el: HTMLElement) {
        if (typeof window === 'undefined') return

        const observer = observerMap.get(el)
        if (observer) {
            observer.disconnect()
            observerMap.delete(el)
        }
    }
} as Directive