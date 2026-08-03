"use client";

import React, { useState } from "react";
import {
    Table,
    Button,
    Chip,
} from "@heroui/react";
import {
    Persons,
    CircleCheckFill,
    CircleXmarkFill,
    ArrowUpRight,
    FileText,
} from "@gravity-ui/icons";
import Link from "next/link";

export default function ApplicationsClient({ applications }) {
    const [selectedCoverLetter, setSelectedCoverLetter] = useState(null);

    return (
        <section className="space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Job Applications</h1>
                    <p className="mt-2 text-zinc-400 text-sm">
                        Review, track and manage candidates who applied for your jobs.
                    </p>
                </div>
            </div>

            {/* Table Card */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B]/60 backdrop-blur-xl p-5 shadow-2xl">
                <Table>
                    <Table.ScrollContainer className="max-h-[600px] overflow-y-auto">
                        <Table.Content
                            aria-label="Job Applications"
                            className="min-w-[1000px]"
                        >
                            <Table.Header>
                                <Table.Column isRowHeader>Candidate</Table.Column>
                                <Table.Column>Phone</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>CV Link</Table.Column>
                                <Table.Column className="text-center">Cover Letter</Table.Column>
                                <Table.Column>Actions</Table.Column>
                            </Table.Header>

                            <Table.Body>
                                {applications && applications.length > 0 ? (
                                    applications.map((app) => (
                                        <Table.Row key={app._id} className="border-b border-white/5 last:border-0">
                                            {/* Candidate */}
                                            <Table.Cell>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-[#5C53FE]/10 border border-[#5C53FE]/20 flex items-center justify-center text-[#827bfd] font-bold text-sm">
                                                        {app.fullName ? app.fullName.charAt(0).toUpperCase() : "?"}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-white text-sm">
                                                            {app.fullName}
                                                        </h3>
                                                        <p className="text-xs text-zinc-500 mt-0.5">
                                                            {app.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Table.Cell>

                                            {/* Phone */}
                                            <Table.Cell>
                                                <span className="text-zinc-300 text-sm font-medium">
                                                    {app.phone || "N/A"}
                                                </span>
                                            </Table.Cell>

                                            {/* Status */}
                                            <Table.Cell>
                                                <Chip
                                                    color={
                                                        app.status === "Accepted"
                                                            ? "success"
                                                            : app.status === "Rejected"
                                                            ? "danger"
                                                            : "primary"
                                                    }
                                                    variant="solid"
                                                    size="sm"
                                                    className="font-bold text-white shadow-sm"
                                                >
                                                    {app.status || "Applied"}
                                                </Chip>
                                            </Table.Cell>

                                            {/* CV Link */}
                                            <Table.Cell>
                                                {app.cvLink ? (
                                                    <Link
                                                        href={app.cvLink}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1.5 text-xs text-[#827bfd] hover:text-white underline font-semibold transition-colors"
                                                    >
                                                        View Resume
                                                        <ArrowUpRight width={14} height={14} />
                                                    </Link>
                                                ) : (
                                                    <span className="text-zinc-500 text-xs">No CV Link</span>
                                                )}
                                            </Table.Cell>

                                            {/* Cover Letter */}
                                            <Table.Cell className="text-center">
                                                {app.coverLetter ? (
                                                    <Button
                                                        isIconOnly
                                                        size="sm"
                                                        variant="flat"
                                                        aria-label="View Cover Letter"
                                                        onClick={() => setSelectedCoverLetter(app.coverLetter)}
                                                        className="bg-[#5C53FE]/10 hover:bg-[#5C53FE] text-[#827bfd] hover:text-white transition-all rounded-xl w-9 h-9 flex items-center justify-center mx-auto"
                                                    >
                                                        <FileText width={16} height={16} />
                                                    </Button>
                                                ) : (
                                                    <span className="text-zinc-500 text-xs">No Cover Letter</span>
                                                )}
                                            </Table.Cell>

                                            {/* Actions */}
                                            <Table.Cell>
                                                <div className="flex gap-2">
                                                    <Button
                                                        size="sm"
                                                        color="success"
                                                        variant="solid"
                                                        className="font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 shadow-md"
                                                    >
                                                        Accept
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        color="danger"
                                                        variant="solid"
                                                        className="font-bold text-xs text-white bg-rose-600 hover:bg-rose-700 shadow-md"
                                                    >
                                                        Reject
                                                    </Button>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                ) : (
                                    <Table.Row>
                                        <Table.Cell className="text-center py-10 text-zinc-500 text-sm">
                                            No applications received yet.
                                        </Table.Cell>
                                        {/* Blank cells to match colSpan size */}
                                        <Table.Cell />
                                        <Table.Cell />
                                        <Table.Cell />
                                        <Table.Cell />
                                        <Table.Cell />
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>

            {/* Cover Letter Modal */}
            {selectedCoverLetter !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="w-full max-w-xl bg-[#1B1B1B] border border-white/10 rounded-3xl p-6 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
                        <button
                            type="button"
                            onClick={() => setSelectedCoverLetter(null)}
                            className="absolute right-5 top-5 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-all font-semibold"
                        >
                            ✕
                        </button>
                        
                        <h3 className="text-xl font-bold text-white mb-4">Cover Letter</h3>
                        
                        <div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            <p className="text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                                {selectedCoverLetter}
                            </p>
                        </div>
                        
                        <div className="mt-6 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setSelectedCoverLetter(null)}
                                className="bg-[#5C53FE] hover:bg-[#4b42e2] text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg shadow-[#5C53FE]/20"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
