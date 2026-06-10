import { createFileRoute } from "@tanstack/react-router";
import {LoginForm} from "@features/auth/components/login-form.tsx";
import {Main} from "@components/ui";

export const Route = createFileRoute("/auth/sign-in")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Main className="flex">
            <LoginForm />
        </Main>
    );
}