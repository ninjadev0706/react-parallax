const WindowsIcon = (props) => {
    return (
        <svg
            fill={props.color}
            xmlns="http://www.w3.org/2000/svg"
            width="28.594"
            height="28.666"
            viewBox="0 0 28.594 28.666"
            style={{ marginLeft: '8px', marginRight: '8px' }}
        >
            <path id="Path_836" data-name="Path 836" d="M13.1,2.29Q20.835,1.106,28.591.04q0,6.793,0,13.583c-5.164.02-10.328.1-15.5.115Q13.094,8.01,13.1,2.29ZM0,4.117c3.884-.6,7.784-1.117,11.684-1.6q0,5.634.007,11.265c-3.9,0-7.794.056-11.691.046ZM0,15.005c3.894-.013,7.787.049,11.681.043,0,3.766.01,7.532,0,11.3C7.794,25.768,3.9,25.264,0,24.737Zm13.076.151H28.591q.01,6.774,0,13.55c-5.158-.773-10.325-1.49-15.492-2.19q-.01-5.679-.023-11.36Z" transform="translate(0 -0.04)" fill={props.color} />
        </svg>
        // <svg
        //     fill={props.color}
        //     xmlns="http://www.w3.org/2000/svg"
        //     viewBox="0 0 50 50"
        //     width={props.width}
        //     height={props.height}
        //     style={{marginLeft: '8px', marginRight: '8px'}}
        // >
        //     <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
        // </svg>
    )
};

export default WindowsIcon;
