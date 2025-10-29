import React from 'react'

const EmailTable = ({ data }) => {
    return (
        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "Arial, sans-serif",
            }}
        >
            <thead>
                <tr>
                    <th
                        colSpan={2}
                        style={{
                            padding: "16px",
                            backgroundColor: "#00A651",
                            color: "white",
                            textAlign: "left",
                            fontSize: "16px",
                        }}
                    >
                        New Enquiry Details
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ label, value }, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                padding: "12px",
                                border: "1px solid #ddd",
                                backgroundColor: "#f4f4f4",
                            }}
                        >
                            {label}
                        </td>
                        <td style={{ padding: "12px", border: "1px solid #ddd" }}>
                            {value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmailTable