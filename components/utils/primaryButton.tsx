import React from 'react';

interface PrimaryButtonContainerProps {
    children: React.ReactNode;
}

export const PrimaryButtonContainer: React.FC<PrimaryButtonContainerProps> = ({ children }) => {
    return (
        <div
            style={{
                width: "75%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 10,
                alignSelf: "center",
                background: "#039855",
                borderRadius: 5,
                color: "#fff",
            }}
        >
            {children}
        </div>
    );
};
