export default function Header({ className = '', children, ...props }) {
    // console.log({{asset('images/logo.png')}});

    return (
        <header className={'header'}>
            <div className={'header__wrapper'}>
                <div className={'header__logo'}>
                    <img src={"build/images/logo-black.png"} alt=""/>
                </div>
                {children}
            </div>
        </header>
    );
}
