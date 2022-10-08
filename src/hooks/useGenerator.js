
const useGenerator = ( password, setIsCopied ) => {

    const copyClipboard = () => {
        navigator.clipboard.writeText(password).then(
            () => {
                setIsCopied(true)

                setTimeout(() => {
                    setIsCopied(false)
                }, 1000)
            },
            (err) => {
                console.error(err)
            }
        );
    }

    return { copyClipboard }
}

export default useGenerator