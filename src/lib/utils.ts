import {type ToastType, useToastStore} from "#/lib/store/useToastStore.ts";

type ToastOptions = {
    title: string
    description?: string
    type?: ToastType
    duration?: number
}

export const toast = {
    show: ({ title, description, type = 'info' }: ToastOptions) => {
        useToastStore.getState().addToast({
            title,
            description,
            type,
        })
    },

    success: (title: string, description?: string) => {
        useToastStore.getState().addToast({
            title,
            description,
            type: 'success',
        })
    },

    error: (title: string, description?: string) => {
        useToastStore.getState().addToast({
            title,
            description,
            type: 'error',
        })
    },

    info: (title: string, description?: string) => {
        useToastStore.getState().addToast({
            title,
            description,
            type: 'info',
        })
    },
}