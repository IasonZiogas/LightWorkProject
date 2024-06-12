CREATE TABLE IF NOT EXISTS Run(
    id INT NOT NULL,
    title varchar(250) NOT NULL,
    started_on timestamp NOT NULL,
    completed_on timestamp NOT NULL,
    kilometers INT NOT NULL,
    location varchar(10) NOT NULL,
    PRIMARY KEY (id)
);

--CREATE TABLE IF NOT EXISTS Bench(
--    id INT NOT NULL
--    title varchar(250) NOT NULL,
--    kilos INT NOT NULL,
--    reps INT NOT NULL,
--    PRIMARY KEY (id)
--);