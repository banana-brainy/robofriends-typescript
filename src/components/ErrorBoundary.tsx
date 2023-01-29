import { Component, ReactNode } from "react";

interface IErrorBoundaryProps {
    title: string;
    children?: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: {title:string}) {
        super (props)
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    render () {
        if (this.state.hasError) {
            return <h1>Ooops. That is an Error</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
