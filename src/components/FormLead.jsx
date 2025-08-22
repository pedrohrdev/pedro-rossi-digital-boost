import React, { useState } from 'react';

export default function FormLead() {
    const [nome, setNome] = useState('');
    const [ddd, setDdd] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const numeroCompleto = `${ddd}${telefone}`;

        const res = await fetch("https://lbryjfgpxasxbjhlffob.supabase.co/rest/v1/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxicnlqZmdweGFzeGJqaGxmZm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODA0MzMsImV4cCI6MjA3MTQ1NjQzM30.FXs9sMDzgctotxAHXu-M9L-DjJd7_WOo7QajoxBIy-E",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxicnlqZmdweGFzeGJqaGxmZm9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODA0MzMsImV4cCI6MjA3MTQ1NjQzM30.FXs9sMDzgctotxAHXu-M9L-DjJd7_WOo7QajoxBIy-E",
                "Prefer": "return=minimal"
            },
            body: JSON.stringify({ nome: nome, telefone: numeroCompleto })
        });

        if (res.ok) {
            alert("Lead cadastrado com sucesso!");
            setNome('');
            setDdd('');
            setTelefone('');
        } else {
            alert("Erro ao cadastrar lead");
        }
    };

    return (
        <div className="bg-card p-6 rounded-lg shadow-lg">
            <form id="leadForm" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="p-3 bg-muted-foreground/10 border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    name="ddd"
                    placeholder="DDD"
                    maxLength="2"
                    required
                    value={ddd}
                    onChange={(e) => setDdd(e.target.value)}
                    className="p-3 bg-muted-foreground/10 border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                    type="text"
                    name="telefone"
                    placeholder="Telefone"
                    required
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="p-3 bg-muted-foreground/10 border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                    type="submit"
                    className="mt-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}