import {createFileRoute} from '@tanstack/react-router'
import {RegisterForm} from "@features/auth/components/register-form.tsx";
import {Main} from "@components/ui";

export const Route = createFileRoute('/auth/sign-up')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Main className="flex">
            <RegisterForm/>
        </Main>
    )
}
