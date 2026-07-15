"use client";

import Link from "next/link";
import {
    Table,
    Button,
    Chip,
} from "@heroui/react";

import {
    Plus,
    Pencil,
    TrashBin,
    Persons,
    CircleCheckFill,
    CircleXmarkFill,
    Clock,
} from "@gravity-ui/icons";



export default function ManagejobsClient({ jobs }) {



    return (
        <section className="space-y-8">

            {/* Header */}

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-white">
                        Manage Jobs
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        View, edit and manage all of your published jobs.
                    </p>

                </div>

                <Link href="/recruiter/managejobs/add-new">

                    <Button
                        color="primary"
                        className="bg-[#5C53FE] font-semibold"

                    >
                        Post New Job
                    </Button>

                </Link>

            </div>

            {/* Table Card */}

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1B1B1B] p-5">

                <Table>

                    <Table.ScrollContainer className="max-h-[500px] overflow-y-auto">

                        <Table.Content
                            aria-label="Recruiter Jobs"
                            className="min-w-[950px] "
                        >

                            <Table.Header>

                                <Table.Column isRowHeader>
                                    Job Title
                                </Table.Column>

                                <Table.Column>
                                    Status
                                </Table.Column>



                                <Table.Column>
                                    Date Posted
                                </Table.Column>

                                <Table.Column >
                                    Actions
                                </Table.Column>

                            </Table.Header>

                            <Table.Body>
                                {jobs.map((job) => (
                                    <Table.Row key={job._id}>

                                        {/* Job Title */}

                                        <Table.Cell>

                                            <div className="space-y-1">

                                                <h3 className="font-semibold text-white">
                                                    {job.jobTitle
                                                    }
                                                </h3>

                                                <p className="text-xs text-zinc-500">
                                                    Job ID #{job._id}
                                                </p>

                                            </div>

                                        </Table.Cell>

                                        {/* Status */}

                                        <Table.Cell>

                                            {job.status === "active" && (
                                                <Chip
                                                    color="success"
                                                    variant="flat"

                                                >
                                                    Active
                                                </Chip>
                                            )}

                                            {job.status === "draft" && (
                                                <Chip
                                                    color="warning"
                                                    variant="flat"

                                                >
                                                    Draft
                                                </Chip>
                                            )}

                                            {job.status === "closed" && (
                                                <Chip
                                                    color="danger"
                                                    variant="flat"

                                                >
                                                    Closed
                                                </Chip>
                                            )}

                                        </Table.Cell>

                                        {/* Applicants */}



                                        {/* Posted */}

                                        <Table.Cell>

                                            <span className="text-zinc-300">
                                                {job.createdAt}
                                            </span>

                                        </Table.Cell>

                                        {/* Actions */}

                                        <Table.Cell>

                                            <div className="flex gap-4">

                                                <Button
                                                    size="sm"
                                                    color="primary"
                                                    variant="flat"

                                                >
                                                    Edit
                                                </Button>

                                                {/* <Button
                                                    size="sm"
                                                    variant="flat"
                                                    color="secondary"
                                                    startContent={<Persons />}
                                                >
                                                    Applicants
                                                </Button> */}
                                                <div className="w-14">
                                                    {job.status === "Closed" ? (
                                                        <Button
                                                            size="sm"
                                                            variant="flat"
                                                            color="success"
                                                        >
                                                            Reopen
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            size="sm"
                                                            variant="flat"
                                                            color="warning"
                                                        >
                                                            Close
                                                        </Button>
                                                    )}
                                                </div>

                                                <Button >
                                                    Delete
                                                </Button>

                                            </div>

                                        </Table.Cell>

                                    </Table.Row>
                                ))}

                            </Table.Body>

                        </Table.Content>

                    </Table.ScrollContainer>

                </Table>

            </div>

        </section>
    );
}