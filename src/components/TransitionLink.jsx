import { Link } from "react-router";

export default function TransitionLink({ target, children, href = "#", ...props }) {
    if (target === "_blank" || href.startsWith("http")) {
        return (
            <a
                href={href}
                target={target}
                {...props}
            >
                {children}
            </a>
        );
    }

    return (
        <Link to={href} {...props} data-transition>
            {children}
        </Link>
    );

}
