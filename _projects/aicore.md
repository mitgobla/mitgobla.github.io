---
layout: project
title: AiCore Data and Cloud Engineering Course
description: Built scalable data pipelines with Python, PySpark, AWS, and SQL with Databricks for ETL, data centralization, and real-time analytics.
image: /assets/images/projects/aicore.png
date: 2024-10-20
tags: [python, database, cloud]
links:
    - title: Data Centralisation Repo
      icon: bi-github
      url: https://github.com/mitgobla/multinational-retail-data-centralisation874
    - title: Pinterest Data Pipeline Repo
      icon: bi-github
      url: https://github.com/mitgobla/pinterest-data-pipeline347
    - title: Certification
      icon: bi-patch-check
      url: https://portal.theaicore.com/showcase/certificate/2/c6950d61-d2d8-4648-9692-092e3ace4007-0da02867-91fb-44b8-bb59-52ca8efaa60c
---

# Overview

I'm pleased to have completed the Data and Cloud engineering course at AiCore. Not only was this an opportunity for me to apply my Python skills to an unfamiliar field, I gained valuable experience in both cloud services and data engineering processes.

On this course I worked on two projects:

- **[Multinational Retail Data Centralization](https://github.com/mitgobla/multinational-retail-data-centralisation874)**: Built a data piepline to centralize and transform retail data from various sources. Using Extract, Transform, Load (ETL) with Python and PostgreSQL for enhanced data accessibility.
- **[Pinterest Data Pipeline](https://github.com/mitgobla/pinterest-data-pipeline347)**: Developed a data pipeline similar to that used in Pinterest, analyzing user engagement data. Used AWS (RDS, S3, MSK, MWAA), Databricks, and PySpark for ETL processing. Performed real-time analytics, to support data-driven marketing strategies.

Both projects have an in-depth writeup on each of the repositories.

## Multinational Retail Data Centralization

I had the opportunity to work on centralizing data from multiple sources, transforming it into usable formats, and loading it into a PostgreSQL database. This experience provided valuable hands-on exposure to key tools and techniques in data engineering.

### Key Skills and Tools

#### 1. Data Parsing and Cleaning:
   - Used Python and Pandas to fetch, parse, and clean data into structured DataFrames.
   - Addressed challenges like inconsistent date formats and erroneous values, ensuring data quality before ingestion.

#### 2. AWS Integration:
   - Set up an AWS S3 bucket for data storage and retrieved data using Python.
   - Gained foundational knowledge of cloud-based data handling.

#### 3. Iterative Data Transformation:
   - Employed Jupyter Notebooks to test and refine data cleaning functions step-by-step, streamlining the final workflow.

#### 4. Database Management:
   - Deployed a PostgreSQL database and utilized pgAdmin for schema validation and SQL query building.
   - Wrote SQL queries to retrieve insights and validate the schema against specifications.

### Overcoming Challenges

#### 1. Inconsistent Data Formats:
   - Parsing phone numbers proved difficult due to numerous formats, despite leveraging the `phonenumbers` library. Adjustments like storing numbers as strings simplified the schema.
   - For dates, I implemented multiple parsing approaches to standardize formats, ensuring consistency and enabling data operations.

#### 2. Data Quality Assurance:
   - Iterating over datasets highlighted the importance of uniformity, both in schema design and data itself, reinforcing best practices for ETL processes.

## Building a Pinterest-Inspired Data Pipeline with AWS, Kafka, and Databricks

In this project, I developed an end-to-end data processing pipeline inspired by Pinterest's data workflows, leveraging AWS, Kafka, and Databricks to manage streaming data, perform analytics, and provide actionable insights.

### Key Skills and Tools

#### 1. AWS Integration
- Configured **Kafka clusters** on EC2 instances using Confluent Kafka REST for streaming data.
- Managed **S3 buckets**, securely integrated with Databricks for seamless data storage and analytics.
- Explored **IAM roles** and **API Gateway** for securing cloud service access, gaining practical knowledge of cloud architecture and workflows.

#### 2. Streaming Data Processing with Kafka
- Set up Kafka topics to stream data into S3 and visualized the flow through the pipeline.
- Troubleshot and resolved script execution errors, emphasizing the importance of attention to detail.

#### 3. Data Transformation with Databricks
- Utilized PySpark for data cleaning and transformations, handling schema variations and generating analytics-ready datasets.
- Tackled challenges like outdated cluster libraries by researching alternatives, such as `percentile_approx` for calculating medians.

#### 4. Airflow for Workflow Automation
- Created Directed Acyclic Graphs (DAGs) to automate Databricks Notebooks.
- Explored potential improvements like chaining notebooks for data gathering, cleaning, and querying processes.

#### 5. Real-Time Data Handling with Kinesis
- Designed a system to process multiple Kinesis streams, transforming JSON payloads into Delta tables.
- Built configurations for each stream to automate transformations and Delta table updates.

### Challenges and Insights

- Navigating diverse tools like Kafka, Databricks, and Kinesis provided hands-on experience with industry-standard data engineering practices.
- Addressing transformation issues in Spark streams taught me the importance of flexibility in coding solutions.
- Visualizing data flow and processing times underscored the importance of real-time analytics for business intelligence.

This project enhanced my understanding of scalable data pipelines and cloud-based workflows, equipping me with the skills to tackle complex data challenges in real-world scenarios.

# Summary

Through these projects, I developed robust skills in designing and implementing end-to-end data pipelines for real-world applications. I integrated AWS services such as S3, EC2, and MSK to manage cloud storage, streaming data, and analytics workflows. Leveraging tools like Databricks and PySpark, I performed data transformations, ensured schema consistency, and derived actionable insights from diverse datasets. Additionally, I explored automation using Airflow DAGs and gained hands-on experience with Kinesis for real-time data handling. These experiences deepened my understanding of scalable data engineering practices and cloud-based workflows, equipping me to solve complex data challenges effectively. I'm excited to apply these skills to my future projects.
